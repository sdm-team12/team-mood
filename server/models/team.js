import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateUpdated: { type: 'Date', required: true },
  happinessLevels: { [
  		dateAdded: {type: 'Date'},
  		HappinessLevel: { type: 'int'}, 
  		] },
  users: { [Schema.Types.User] },
});

export default mongoose.model('Team', teamSchema);
