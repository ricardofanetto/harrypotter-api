const characterSchema = require('./characters.schema')
const _ = require('lodash');

async function create(req, res) {
  const { body } = req
  const data = await characterSchema.create(body)
  return res.status(201).send({ message: 'Character inserted', data });
}

async function update(req, res) {
  const { id } = req.params
  const { body } = req
  await characterSchema.updateOne({ _id: id }, { $set: body })
  const data = await characterSchema.findById(id)
  return res.status(202).send({ message: 'Character updated', data })
}

async function findAll(req, res) {
  const { pageSize, page, name } = req.query;
  const query = {

  }

  if (name) query["name"] = { "$regex": name, "$options": "i" }

  const data = await characterSchema.paginate(query, {
    limit: pageSize,
    page
  })
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
  return res.status(204).send({ message: 'Character deleted!' });
}

module.exports = {
  create,
  update,
  findAll,
  findOne,
  remove
}