const express = require('express');
const router = express.Router();

const CharactersController = require('./characters.controller');

const validations = require('./characters.schema.validation');
const joi = require('../../shared/middlewares/joi-validation');

/**
 * @typedef Character
 * @property {string} _id
 * @property {string} name.required 
 * @property {string} role.required 
 * @property {string} house.required 
 * @property {string} school.required 
 * @property {string} patronus.required 
 */
/**
 * @typedef CharacterSender
 * @property {string} name.required 
 * @property {string} role.required 
 * @property {string} house.required 
 * @property {string} school.required 
 * @property {string} patronus.required 
 */
/**
 * @typedef Message
 * @property {string} message
 */

/**
 * @typedef CharacterPagination
 * @property {Array<Character>} docs
 * @property {number} total 
 * @property {number} limite
 * @property {number} page
 * @property {number} pages 
 */

/**
 * Get All Characters
 * @route GET /api/characters
 * @group Characters - Operations about Characters
 * @param {string} house.query - filter by ObjectId house
 * @param {string} name.query - filter by name character
 * @param {string} role.query - filter by role character
 * @param {string} school.query - filter by school character
 * @param {string} patronus.query - filter by patronus character
 * @returns {CharacterPagination.model} 200 - An object character pagination
 * @returns {Error}  default - Unexpected error
 */
router.get('/',  CharactersController.findAll);

/**
 * Get One Characters
 * @route GET /api/characters/:id
 * @group Characters - Operations about Characters
 * @param {string} id.path.required- filter by id character
 * @returns {Character} 200 - One Character
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', CharactersController.findOne);

/**
 * Store a new Character
 * @route POST /api/characters
 * @group Characters - Operations about Characters
 * @param {CharacterSender.model} Character.body.required
 * @returns {Character} 200 - One Character
 * @returns {Error}  default - Unexpected error
 */
router.post('/', [joi(validations.createOrUpdate)], CharactersController.create);
/**
 * Update a Character
 * @route PUT /api/characters/:id
 * @group Characters - Operations about Characters
 * @param {string} id.path.required - id character
 * @param {CharacterSender.model} Character.body.required
 * @returns {Character} 200 - One Character
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', [joi(validations.createOrUpdate)], CharactersController.update);
/**
 * Delete a Character
 * @route Delete /api/characters/:id
 * @group Characters - Operations about Characters
 * @param {string} id.path.required - id character
 * @returns {Message.model} 200 - Message model
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', CharactersController.remove);

module.exports = router;