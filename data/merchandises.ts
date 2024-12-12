export interface Merchandise {
  name: string;
  type: "Digital album" | "CD" | "T-shirt" | "Girls T-shirt" | "Patch";
  price: number;
  url: string;
  image: string;
}

const merchandises: Array<Merchandise> = [
  {
    name: 'March Of Plague',
    type: 'Digital album',
    price: 500,
    url: 'https://stridentthrash.bandcamp.com/album/march-of-plague',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1574771723/strident/prod/merchandise/March%20Of%20Plague-Digital%20Album.jpg',
  },
  {
    name: 'March Of Plague',
    type: 'CD',
    price: 1000,
    url: 'https://stridentthrash.bandcamp.com/album/march-of-plague',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700237/strident/prod/merchandise/March%20Of%20Plague-CD.jpg',
  },
  {
    name: 'On The Aim',
    type: 'Digital album',
    price: 500,
    url: 'https://stridentthrash.bandcamp.com/album/on-the-aim',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700537/strident/prod/merchandise/On%20The%20Aim-Digital%20album.jpg',
  },
  {
    name: 'On The Aim',
    type: 'CD',
    price: 1000,
    url: 'https://stridentthrash.bandcamp.com/album/on-the-aim',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700588/strident/prod/merchandise/On%20The%20Aim-CD.jpg',
  },
  {
    name: 'March Of Plague (One sided)',
    type: 'T-shirt',
    price: 1500,
    url: 'https://stridentthrash.bandcamp.com/merch/mans-one-side-print-t-shirt-march-of-plague-limited-edition',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700917/strident/prod/merchandise/Limited%20edition%20March%20Of%20Plague%20man%27s%20one%20side%20print-t-shirt.jpg',
  },
  {
    name: 'Embroidered logo',
    type: 'Patch',
    price: 500,
    url: 'https://stridentthrash.bandcamp.com/merch/embroidered-logo-patch',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1577701975/strident/prod/merchandise/Embroidered%20logo-patch.jpg',
  },
  {
    name: 'Zombie',
    type: 'T-shirt',
    price: 1500,
    url: 'https://stridentthrash.bandcamp.com/merch/zombie-t-shirt',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1673891132/strident/prod/merchandise/xhmv4e8wdfkrfcy3xgu0.jpg',
  },
];

export default merchandises;
