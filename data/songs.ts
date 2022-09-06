export interface Song {
  name: string;
  url: string;
  album: string;
}

const songs: Array<Song> = [
  {
    name: "No Faith No War",
    url: "https://open.spotify.com/embed/track/3E4zDBJCas8gy5YINUchFz",
    album: "March Of Plague",
  },
  {
    name: "March Of Plague",
    url: "https://open.spotify.com/embed/track/0OaTAp8LVe7doqiB7sggCs",
    album: "March Of Plague",
  },
  {
    name: "Be Metal",
    url: "https://open.spotify.com/embed/track/1jElrQH7U55eckVkOrnfSI",
    album: "March Of Plague",
  },
  {
    url: "https://open.spotify.com/embed/track/4NRqH03A4Rb0mSSejSb56t",
    name: "Psycho Provocator",
    album: "On The Aim",
  },
  {
    name: "Prepare To Die",
    url: "https://open.spotify.com/embed/track/2fgu6pVLPBUtsj7z8sJJq0",
    album: "On The Aim",
  },
  {
    url: "https://open.spotify.com/embed/track/1Njqc3kRDnwBFZiMXeEoJS",
    album: "On The Aim",
    name: "To Beer Or Not To Beer",
  },
];

export default songs;
