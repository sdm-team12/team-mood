import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  path: { type: 'String', required: true },
  happinessLevel: { type: 'int', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Image', imageSchema);
