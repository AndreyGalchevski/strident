export interface Album {
  name: string;
  url: string;
  year: number;
}

const albums: Album[] = [
  {
    name: 'Paranoia of the Tyrant',
    url: 'https://open.spotify.com/embed/album/24it76wRmx6A2p3e3QxUBB',
    year: 2023,
  },
  {
    name: 'March Of Plague',
    url: 'https://open.spotify.com/embed/album/4FwG4KugWjQTZRD1XMa8mF',
    year: 2019,
  },
  {
    name: 'On The Aim',
    url: 'https://open.spotify.com/embed/album/4RiZswPC9GGlXOHn188XjS',
    year: 2010,
  },
];

export default albums;
