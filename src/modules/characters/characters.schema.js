const mongoose = require('mongoose');

const charactersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  school: { type: String, required: true },
  house: { type: String, required: true },
  patronus: { type: String, required: true }
}, {
  collection: 'Characters',
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  id: false
});

charactersSchema.plugin(require('mongoose-paginate'));

module.exports = mongoose.model('Characters', charactersSchema);

