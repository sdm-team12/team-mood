import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const systemConfigSchema = new Schema({
  notifPostponedInterval: { type: 'number', default: '10', required: true },
  notifPostponedMaxNumber: { type: 'number', default: 5, required: true },
  voluntSubmissionMaxNumber: { type: 'number', default: 3, required: true },
  notifTimeWindowInitial: { type: 'number', default: 9, required: true },
  notifTimeWindowFinal: { type: 'number', default: 18, required: true },
  notifText: { type: 'string', required: true },
  notifMaxNumber: { type: 'number', default: 5, required: true },
});

export default mongoose.model('SystemConfig', systemConfigSchema);
