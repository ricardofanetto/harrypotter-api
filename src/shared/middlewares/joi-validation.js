const joiUtils = require('../utils/joi-util')
const JoiValidation = (schema, property) => {
  return (req, res, next) => {
    const { valid, message } = joiUtils(req.body, schema)
    if (valid) next()
    else res.status(422).json({ error: message })
  }
}
module.exports = JoiValidation;