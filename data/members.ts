export interface Member {
  name: string;
  instrument: string;
  image: string;
  imageNG: string;
}

const members: Array<Member> = [
  {
    name: "Metalych",
    instrument: "Lead Guitar and Vocals",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571334257/strident/prod/members/misha.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1571391848/strident/prod/members/misha.jpg",
  },
  {
    name: "Yaniv",
    instrument: "Guitar",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1662666920/strident/prod/members/yaniv.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1662666920/strident/prod/members/yaniv.jpg",
  },
  {
    name: "Artem",
    instrument: "Bass Guitar",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571394214/strident/prod/members/Artem.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1571394214/strident/prod/members/Artem.jpg",
  },
  {
    name: "Andrey",
    instrument: "Drums",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571394243/strident/prod/members/Andrey.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1571394244/strident/prod/members/Andrey.jpg",
  },
];

export default members;
