import mongoose from 'mongoose';
import MoodUser from './moodUser';
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateUpdated: { type: 'Date', required: false },
  happinessLevels: [ {
  		dateAdded: {type: 'Date'},
  		happinessLevel: { type: 'number'} 
  		} ] ,
  moodUsers: [Schema.ObjectId]
});

export default mongoose.model('Team', teamSchema);
