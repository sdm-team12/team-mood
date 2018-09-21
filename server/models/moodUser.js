import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const moodUserSchema = new Schema({
  login: { type: 'string', required: true },
  email: { type: 'string', required: true },
  name: { type: 'string', required: true },
  passwordHashed: { type: 'string', required: false },
  submissionNumberToday: { type: 'number', required: true },
  status: { type: 'string', default: 'D', enum: ['A', 'D', 'P'], required: true }, //A - active, D - deactive, P - Pending
  dateAdded: { type: 'date', default: Date.now, required: true },
  dateUpdated: { type: 'date', required: false },
  defaultRole: { type: 'string', enum: ['T', 'L', 'R', 'A'], required: true }, //T - Team member, L - logger, R - researcher, A - Admin
  notifications: [ {
  		dateAdded: { type: 'date'}, 
  		postponesCurrentNumber: { type: 'number' },
  		valid: { type: 'boolean' },
  		clicked: { type: 'boolean' } 
  }] 
});

export default mongoose.model('MoodUser', moodUserSchema);
