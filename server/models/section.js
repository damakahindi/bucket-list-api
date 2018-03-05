const mongoose = require('mongoose');

const { Schema } = mongoose;

const SectionSchema = new Schema({
  googleId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Section', SectionSchema);
