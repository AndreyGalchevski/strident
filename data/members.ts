export interface Member {
  name: string;
  instrument: string;
  image: string;
}

const members: Array<Member> = [
  {
    name: 'Metalych',
    instrument: 'Lead Guitar and Vocals',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/e_improve,w_640,h_960,c_thumb/v1692945089/strident/prod/members/Misha-Japara.jpg',
  },
  {
    name: 'Yaniv',
    instrument: 'Guitar',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/e_improve,w_640,h_960,c_thumb/v1692945089/strident/prod/members/Yaniv-Sofia.jpg',
  },
  {
    name: 'Artem',
    instrument: 'Bass Guitar',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/e_improve,w_640,h_960,c_thumb/v1692945089/strident/prod/members/Artem-Sofia.jpg',
  },
  {
    name: 'Andrey',
    instrument: 'Drums',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/e_improve,w_640,h_960,c_thumb/v1692945089/strident/prod/members/Andrey-Sofia.jpg',
  },
];

export default members;
