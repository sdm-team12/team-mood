import Image from './models/image';
import SystemConfig from './models/systemConfig';
import SystemLog from './models/systemLog';
import MoodUser from './models/moodUser';
import Team from './models/team';

export default function () {
  SystemConfig.count().exec((err, count) => {
   // if (count > 0) {
   //   return;
   // }

    //delete existing data
    Image.deleteMany({}, function (err) {
      if (err) return handleError(err);
      // deleted at most one tank document
      });

    SystemConfig.deleteMany({}, function (err) {
      if (err) return handleError(err);
      // deleted at most one tank document
      });

    SystemLog.deleteMany({}, function (err) {
      if (err) return handleError(err);
      // deleted at most one tank document
      });

    Team.deleteMany({}, function (err) {
      if (err) return handleError(err);
      // deleted at most one tank document
      });

    MoodUser.deleteMany({}, function (err) {
      if (err) return handleError(err);
      // deleted at most one tank document
      });
    
    //Load dummy System Config, just 1 document
    const systemConfig1 = new SystemConfig({ notifPostponedInterval: 10,	notifPostponedMaxNumber: 5, voluntSubmissionMaxNumber: 3,
	                                         notifTimeWindowInitial: 9, notifTimeWindowFinal: 18, 
	                                         notifText: 'That is your reminder to fill the happiness level.', notifMaxNumber: 5 });
    //Load dummy System Log, just 1 document
    let dateString = "2018-09-15 01:02:03" , reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/, [, year, month, day, hours, minutes, seconds] = reggie.exec(dateString)
                                          , dateObject = new Date(year, month-1, day, hours, minutes, seconds);
    const systemLog1 = new SystemLog({ date: dateObject, description: 'This is the first log test description.' });
    
    dateString = "2018-09-15 01:05:02" , reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/, [, year, month, day, hours, minutes, seconds] = reggie.exec(dateString)
                                          , dateObject = new Date(year, month-1, day, hours, minutes, seconds);
    const systemLog2 = new SystemLog({ date: dateObject, description: 'This is the second  log test description.' });

    //Load dummy images, one for each happiness level
    const image1 = new Image({ path: './images/mood/mood1_1.jpg', happinessLevel: 1 });
    const image2 = new Image({ path: './images/mood/mood2_1.jpg', happinessLevel: 2 });
    const image3 = new Image({ path: './images/mood/mood3_1.jpg', happinessLevel: 3 });
    const image4 = new Image({ path: './images/mood/mood4_1.jpg', happinessLevel: 4 });
    const image5 = new Image({ path: './images/mood/mood5_1.jpg', happinessLevel: 5 });
    
   //Load dummy users
 	const moodUser1 = new MoodUser({ login: 'Ahmed123', email: 'arbjunqueira@gmail.com', name: 'Ahmed', passwordHashed: '', submissionNumberToday: 2 , status: 'A',
                             dateAdded: '7/21/2018', dateUpdated: '',defaultRole: 'T', notifications:''  });
    const moodUser2 = new MoodUser({ login: 'Faseeh123', email: 'arbjunqueira@gmail.com', name: 'Faseeh', passwordHashed: '', submissionNumberToday: 3, status: 'A',
                             dateAdded: '8/22/2018', dateUpdated: '',defaultRole: 'T', notifications:''  });
    const moodUser3 = new MoodUser({ login: 'Sai123', email: 'arbjunqueira@gmail.com', name: 'Sai', passwordHashed: '', submissionNumberToday: 5, status: 'A',
                             dateAdded: '8/30/2018', dateUpdated: '',defaultRole: 'R', notifications:''  });
    const moodUser4 = new MoodUser({ login: 'Alvaro123', email: 'arbjunqueira@gmail.com', name: 'Alvaro', passwordHashed: '', submissionNumberToday:1 , status: 'P',
                             dateAdded: '3/9/2018', dateUpdated: '3/9/2018',defaultRole: 'A',notifications:''  });
    const moodUser5 = new MoodUser({ login: 'Rohit123', email: 'arbjunqueira@gmail.com', name: 'Rohit', passwordHashed: '', submissionNumberToday: 0, status: 'D',
                             dateAdded: '8/23/2018', dateUpdated: '',defaultRole: 'T',
                             notifications: [ {dateAdded: '11/09/2018', postponesCurrentNumber: 3, valid: true, clicked: false}] });
    const moodUser6 = new MoodUser({ login: 'Dang123', email: 'arbjunqueira@gmail.com', name: 'Dang', passwordHashed: '', submissionNumberToday: 2, status: 'A',
                             dateAdded: '8/6/2018', dateUpdated: '9/11/2018',defaultRole: 'L',
                             notifications: [ {dateAdded: '10/09/2018', postponesCurrentNumber: 0, valid: true, clicked: false},
                                              {dateAdded: '11/09/2018', postponesCurrentNumber: 1, valid: false, clicked: true}] });


   //Load dummy teams
    const team1 = new Team({ name: 'Team 01', dateAdded: '10/09/2018', dateUpdated: '', 
                             moodUsers: [moodUser1] });
    const team2 = new Team({ name: 'Team 02', dateAdded: '11/09/2018', dateUpdated: '12/09/2018', 
                             happinessLevels: [ { dateAdded: '11/09/2018', happinessLevel: 5} ],
                             moodUsers: [moodUser2, moodUser3, moodUser4, moodUser5, moodUser6] });
        
    SystemConfig.create(systemConfig1, (error) => {
      console.log('Dummy SystemConfig started....');
      if (!error) {
         console.log('Dummy SystemConfig loaded in Mongo....');
      }
    });

    SystemLog.create([systemLog1, systemLog2], (error) => {
      console.log('Dummy SystemLog started....');
      if (!error) {
         console.log('Dummy SystemLog loaded in Mongo....');
      }
    });

    Image.create([image1, image2, image3, image4, image5], (error) => {
      console.log('Dummy images  started....');
      if (!error) {
         console.log('Dummy Images  loaded in Mongo....');
      }
    });

     MoodUser.create([moodUser1, moodUser2, moodUser3, moodUser4, moodUser5, moodUser6], (error) => {
        console.log('Dummy users started....');
          if (!error) {
             console.log('Dummy Users loaded in Mongo....');
      }
    });

    Team.create([team1, team2], (error) => {
        console.log('Dummy Teams started....');
//        console.log(error);
      if (!error) {
         console.log('Dummy Teams loaded in Mongo....');
      }
    });
   
  });
};
