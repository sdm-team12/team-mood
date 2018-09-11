import Image from './models/image';
import SystemConfig from './models/systemConfig';
//import SystemLog from './models/systemLog';
import Team from './models/team';
import User from './models/user';

export default function () {
  SystemConfig.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const image1 = new Image({ path: '../XXX', happinessLevel: 1 });
    const image2 = new Image({ path: '../XXX', happinessLevel: 2 });
    const image3 = new Image({ path: '../XXX', happinessLevel: 3 });
    const image4 = new Image({ path: '../XXX', happinessLevel: 4 });
    const image5 = new Image({ path: '../XXX', happinessLevel: 5 });
    const image6 = new Image({ path: '../XXX', happinessLevel: 1 });
    const image7 = new Image({ path: '../XXX', happinessLevel: 2 });
    const image8 = new Image({ path: '../XXX', happinessLevel: 3 });
    const image9 = new Image({ path: '../XXX', happinessLevel: 4 });
    const image10 = new Image({ path: '../XXX', happinessLevel: 5 });
    const systemConfig1 = new SystemConfig({ notifPostponedInterval: 10,	notifPostponedMaxNumber: 5, voluntSubmissionMaxNumber: 3,
	notifTimeWindowInitial: 9, notifTimeWindowFinal: 18, 
	notifText: 'That is your reminder to fill the happiness level.', notifMaxNumber: 5 });

   
	
	
	
	const user1 = new User({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
    const user2 = new User({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
    const user3 = new User({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
    const user4 = new User({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
    const team1 = new Team({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
    const team2 = new Team({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    Post.create([post1, post2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
