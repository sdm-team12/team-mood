import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: { type: 'String', required: true },
  email: { type: 'String', required: true },
  name: { type: 'String', required: true },
  passwordHashed: { type: 'String', required: true },
  submissionNumberToday: { type: 'int', required: true },
  status: { type: 'string', default: 'D', enum: ['A', 'D', 'P'], required: true }, //A - active, D - deactive, P - Pending
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateUpdated: { type: 'Date', required: true },
  defaultRole: { type: 'String', enum: ['T', 'L', 'R', 'A'], required: true }, //T - Team member, L - logger, R - researcher, A - Admin
  notifications: { [
  		dateAdded: { type: 'Date'}, 
  		postponesCurrentNumber: { type: 'int' },
  		valid: { type: 'boolean' },
  		clicked: { type: 'booelan' }, ] },
});

export default mongoose.model('User', userSchema);
