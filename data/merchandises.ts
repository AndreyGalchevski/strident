export interface Merchandise {
  name: string;
  type: "Digital album" | "CD" | "T-shirt" | "Girls T-shirt" | "Patch";
  price: number;
  url: string;
  image: string;
}

const merchandises: Array<Merchandise> = [
  {
    name: 'LIVE DIE THRASH',
    type: 'T-shirt',
    price: 20,
    url: 'https://stridentthrash.bandcamp.com/merch/live-die-thrash',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1734093163/strident/prod/merchandise/0037899015_10.jpg',
  },
  {
    name: 'TTFD',
    type: 'T-shirt',
    price: 13,
    url: 'https://stridentthrash.bandcamp.com/merch/ttfd',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1734093104/strident/prod/merchandise/0032566975_10.jpg',
  },
  {
    name: 'March Of Plague',
    type: 'CD',
    price: 10,
    url: 'https://stridentthrash.bandcamp.com/album/march-of-plague',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700237/strident/prod/merchandise/March%20Of%20Plague-CD.jpg',
  },
  {
    name: 'On The Aim',
    type: 'CD',
    price: 10,
    url: 'https://stridentthrash.bandcamp.com/album/on-the-aim',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700588/strident/prod/merchandise/On%20The%20Aim-CD.jpg',
  },
  {
    name: 'March Of Plague',
    type: 'Digital album',
    price: 7,
    url: 'https://stridentthrash.bandcamp.com/album/march-of-plague',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1574771723/strident/prod/merchandise/March%20Of%20Plague-Digital%20Album.jpg',
  },
  {
    name: 'On The Aim',
    type: 'Digital album',
    price: 7,
    url: 'https://stridentthrash.bandcamp.com/album/on-the-aim',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700537/strident/prod/merchandise/On%20The%20Aim-Digital%20album.jpg',
  },
];

export default merchandises;
