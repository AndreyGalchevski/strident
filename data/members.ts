export interface Member {
  name: string;
  instrument: string;
  info: string;
  image: string;
  imageNG: string;
}

const members: Array<Member> = [
  {
    name: "Dmitry Samoilov (Demon)",
    instrument: "Vocals",
    info: "Pure Evil",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571775978/strident/members/production/Dmitry%20Samoilov%20%28Demon%29.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571775979/strident/members/production/Dmitry%20Samoilov%20%28Demon%29_ng.webp",
  },
  {
    name: "Metalych",
    instrument: "Guitar",
    info: "Shredder From Hell",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571334257/strident/members/production/misha.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571391848/strident/members/production/misha_ng.webp",
  },
  {
    name: "Artem Apekishev",
    instrument: "Bass Guitar",
    info: "Bone Crushing Heaviness",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571394214/strident/members/production/Artem.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571394214/strident/members/production/Artem_ng.webp",
  },
  {
    name: "Andrey Galchevski",
    instrument: "Drums",
    info: "Drum Machine",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571394243/strident/members/production/Andrey.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571394244/strident/members/production/Andrey_ng.webp",
  },
];

export default members;
