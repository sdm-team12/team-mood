import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  path: { type: 'string', required: true },
  happinessLevel: { type: 'number', required: true },
  dateAdded: { type: 'date', default: Date.now, required: true },
});

export default mongoose.model('Image', imageSchema);
