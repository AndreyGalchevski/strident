export interface Merchandise {
  name: string;
  type: "Digital album" | "CD" | "T-shirt" | "Girls T-shirt" | "Patch";
  price: number;
  url: string;
  image: string;
  imageNG: string;
}

const merchandises: Array<Merchandise> = [
  {
    name: "March Of Plague",
    type: "Digital album",
    price: 7,
    url: "https://stridentthrash.bandcamp.com/album/march-of-plague",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1574771723/strident/prod/merchandise/March%20Of%20Plague-Digital%20Album.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1574771724/strident/prod/merchandise/March%20Of%20Plague-Digital%20Album.jpg",
  },
  {
    name: "March Of Plague",
    type: "CD",
    price: 16,
    url: "https://stridentthrash.bandcamp.com/album/march-of-plague",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700237/strident/prod/merchandise/March%20Of%20Plague-CD.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1577700238/strident/prod/merchandise/March%20Of%20Plague-CD.jpg",
  },
  {
    name: "On The Aim",
    type: "Digital album",
    price: 4,
    url: "https://stridentthrash.bandcamp.com/album/on-the-aim",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700537/strident/prod/merchandise/On%20The%20Aim-Digital%20album.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1577700538/strident/prod/merchandise/On%20The%20Aim-Digital%20album.jpg",
  },
  {
    name: "On The Aim",
    type: "CD",
    price: 13.5,
    url: "https://stridentthrash.bandcamp.com/album/on-the-aim",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700588/strident/prod/merchandise/On%20The%20Aim-CD.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1577700589/strident/prod/merchandise/On%20The%20Aim-CD.jpg",
  },
  {
    name: "March Of Plague (Two sided)",
    type: "T-shirt",
    price: 20,
    url: "https://stridentthrash.bandcamp.com/merch/mans-two-sided-print-t-shirt-weeder-new-design",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700792/strident/prod/merchandise/March%20Of%20Plague%20man%27s%20two%20sided%20print-t-shirt.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1577700793/strident/prod/merchandise/March%20Of%20Plague%20man%27s%20two%20sided%20print-t-shirt.jpg",
  },
  {
    name: "March Of Plague (Two sided)",
    type: "Girls T-shirt",
    price: 20,
    url: "https://stridentthrash.bandcamp.com/merch/womans-two-sided-print-t-shirt-weeder-new-design",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1577701565/strident/prod/merchandise/March%20Of%20Plague%20woman%27s%20two%20sided%20print-t-shirt.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1577701566/strident/prod/merchandise/March%20Of%20Plague%20woman%27s%20two%20sided%20print-t-shirt.jpg",
  },
  {
    name: "March Of Plague (One sided)",
    type: "T-shirt",
    price: 17,
    url: "https://stridentthrash.bandcamp.com/merch/mans-one-side-print-t-shirt-march-of-plague-limited-edition",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1577700917/strident/prod/merchandise/Limited%20edition%20March%20Of%20Plague%20man%27s%20one%20side%20print-t-shirt.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1577700918/strident/prod/merchandise/Limited%20edition%20March%20Of%20Plague%20man%27s%20one%20side%20print-t-shirt.jpg",
  },
  {
    name: "March Of Plague (One sided)",
    type: "Girls T-shirt",
    price: 17,
    url: "https://stridentthrash.bandcamp.com/merch/womans-one-side-print-t-shirt-march-of-plague-limited-edition",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1577701798/strident/prod/merchandise/Limited%20edition%20March%20Of%20Plague%20Woman%27s%20one%20side%20print-t-shirt.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1577701799/strident/prod/merchandise/Limited%20edition%20March%20Of%20Plague%20Woman%27s%20one%20side%20print-t-shirt.jpg",
  },
  {
    name: "Embroidered logo",
    type: "Patch",
    price: 5,
    url: "https://stridentthrash.bandcamp.com/merch/embroidered-logo-patch",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1577701975/strident/prod/merchandise/Embroidered%20logo-patch.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1577701976/strident/prod/merchandise/Embroidered%20logo-patch.jpg",
  },
];

export default merchandises;
