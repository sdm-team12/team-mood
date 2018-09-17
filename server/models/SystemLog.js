import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SystemLogSchema = new Schema({
  date: { type: 'date', default: Date.now, required: false},
  description: { type: 'string', required: true },
});

export default mongoose.model('SystemLog', SystemLogSchema);
