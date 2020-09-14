const characterSchema = require('./characters.schema');
const _ = require('lodash');
const { getAllHouses, houseIdIsValid } = require('../houses/houses.service');

async function create(req, res) {
  const { body } = req;

  if (!await houseIdIsValid(body.house)) {
    return res.status(422).send({ error: `House ${body.house} is not valid` });
  }

  const data = await characterSchema.create(body);
  return res.status(201).send({ message: 'Character inserted', data });
}

async function update(req, res) {
  const { id } = req.params;
  const { body } = req;
  await characterSchema.updateOne({ _id: id }, { $set: body });
  const data = await characterSchema.findById(id);
  return res.status(202).send({ message: 'Character updated', data });
}

async function findAll(req, res) {
  const { pageSize, page, name, role, school, patronus, house } = req.query;
  const houses = await getAllHouses();

  const query = {}
  if (name) query['name'] = { '$regex': name, '$options': 'i' }
  if (role) query['role'] = { '$regex': role, '$options': 'i' }
  if (school) query['school'] = { '$regex': school, '$options': 'i' }
  if (patronus) query['patronus'] = { '$regex': patronus, '$options': 'i' }
  if (house) query['house'] = house;

  const data = await characterSchema.paginate(query, {
    limit: pageSize,
    page,
    lean: true
  })

  data.docs = data.docs.map(character =>
    ({
      ...character,
      house: houses.find(house => house._id === character.house) || character.house
    }));

  return res.status(200).send(data);
}

async function findOne(req, res) {
  const { id } = req.params
  const data = await characterSchema.findOne({ _id: id })
  return res.status(200).send(data)
}

async function remove(req, res) {
  const { id } = req.params
  await characterSchema.deleteOne({ id: id });
  return res.status(204).send({});
}

module.exports = {
  create,
  update,
  findAll,
  findOne,
  remove
}