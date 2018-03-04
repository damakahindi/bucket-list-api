const mongoose = require('mongoose');

const { Schema } = mongoose;

const BucketSchema = new Schema({
  googleId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sectionId: { type: Schema.Types.ObjectId, ref: 'Section' },
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Bucket', BucketSchema);
