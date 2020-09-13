const joi = require('joi');
const ptbr = require('./joi-language-pt-br');

module.exports = (data, schema) => {
    const { error } = joi.validate(data, schema, {
        language: ptbr
    });
    const valid = error == null;
    if (valid) {
        return { valid: true, message: undefined }
    } else {
        const { details } = error;
        const message = details.map(i => i.message).join(',')
        return { valid: false, message }
    }
}