const Joi = require('joi')

module.exports = {
  createOrUpdate: Joi.object().keys({
    name: Joi.string().required().label("Name"),
    role: Joi.string().required().label("Role"),
    school: Joi.string().required().label("School"),
    house: Joi.string().required().label("House"),
    patronus: Joi.string().required().label("Patronus"),
  })
}