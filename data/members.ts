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
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571334257/strident/members/production/misha.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571391848/strident/members/production/misha_ng.webp",
  },
  {
    name: "Yaniv",
    instrument: "Guitar",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1662666920/strident/members/production/yaniv.jpg",
    imageNG: "",
  },
  {
    name: "Artem",
    instrument: "Bass Guitar",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571394214/strident/members/production/Artem.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571394214/strident/members/production/Artem_ng.webp",
  },
  {
    name: "Andrey",
    instrument: "Drums",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571394243/strident/members/production/Andrey.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571394244/strident/members/production/Andrey_ng.webp",
  },
];

export default members;
