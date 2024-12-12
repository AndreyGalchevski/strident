export interface Gig {
  name: string;
  venue: string;
  address: string;
  city: string;
  date: string;
  fbEvent: string;
  image: string;
  imageNG: string;
}

const gigs: Array<Gig> = [
  {
    name: "Battle For The North",
    venue: "Wunderbar",
    address: "Hativat Golani 18",
    city: "Haifa",
    date: "2022-10-01T17:00:00.000+00:00",
    fbEvent: "https://fb.me/e/2EOm0Nl0z",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1662664964/strident/prod/gigs/battle-for-the-north.jpg",
    imageNG: "",
  },
  {
    name: "Moshpit Balagan",
    venue: "Levontin7",
    address: "Levontin 7",
    city: "Tel Aviv",
    date: "2020-08-05T18:00:00.000+00:00",
    fbEvent: "https://fb.me/e/1z56ClNSx",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1662664967/strident/prod/gigs/moshpit-balagan.jpg",
    imageNG: "",
  },
  {
    name: "Rock Show",
    venue: "Art Club",
    address: "Kibutz Galuyot 45",
    city: "Tel Aviv",
    date: "2020-04-14T18:00:00.000+00:00",
    fbEvent: "https://fb.me/e/3bZWPffIY",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1662664964/strident/prod/gigs/rock-show.jpg",
    imageNG: "",
  },
  {
    name: "Metal 4 Peace",
    venue: "Gagarin",
    address: "Kibutz Galuyot 13",
    city: "Tel Aviv",
    date: "2020-04-02T09:00:00.000+00:00",
    fbEvent: "https://fb.me/e/2sGndwGD9",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1662664966/strident/prod/gigs/metal-4-peace.jpg",
    imageNG: "",
  },
  {
    name: "Epicenter",
    venue: "Jan Jack",
    address: "Sontsino 17",
    city: "Tel Aviv",
    date: "2020-02-17T18:00:00.000+00:00",
    fbEvent: "https://fb.me/e/1km15UkD6",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1662664969/strident/prod/gigs/epi_center.jpg",
    imageNG: "",
  },
  {
    name: "YANA ORQO Live Online Fest",
    venue: "Peru",
    address: "World wide",
    city: "Web",
    date: "2020-08-31T18:00:00.000+00:00",
    fbEvent: "",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1596523725/strident/prod/gigs/Peru-2020-09-01.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1596523726/strident/prod/gigs/Peru-2020-09-01.jpg",
  },
  {
    name: "Bloody News Online Fest",
    venue: "Romania",
    address: "World wide",
    city: "Web",
    date: "2020-08-27T18:00:00.000+00:00",
    fbEvent:
      "https://www.facebook.com/events/335636320939954/?acontext=%7B%22source%22%3A3%2C%22source_newsfeed_story_type%22%3A%22regular%22%2C%22action_history%22%3A%22%5B%7B%5C%22surface%5C%22%3A%5C%22newsfeed%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22feed_story%5C%22%2C%5C%22extra_data%5C%22%3A%5B%5D%7D%5D%22%2C%22has_source%22%3Atrue%7D&source=3&source_newsfeed_story_type=regular&action_history=%5B%7B%22surface%22%3A%22newsfeed%22%2C%22mechanism%22%3A%22feed_story%22%2C%22extra_data%22%3A%5B%5D%7D%5D&has_source=1&__tn__=K-R&eid=ARBYDQ-JVTL8GNNH3iEZHaMkiv3j9CiLnP1xm4Hd6hThOQqAOPpxdc12BzJODi2FE3zlKmbMcYyhDNq6&fref=mentions&__xts__%5B0%5D=68.ARBR_MVP6pNZ2MBnMk7iLOdqsEL4QAKioaKLdXEBhjsvO9I6z70Bs_n7iKDdejfzuLYPktG9zpHflakZitL6B3ysaD0iwI0LutncBbFkx6-qRyfuqnS5wape-Lex688LZP_tANJw_2a9FEk27zNa4jVnRNBCJ6E4vSeL8uxefXSQGfR9sQDdg6TqHXU9NBMHMTwQUHtehxMMQGAy1ldBP3zfcl-k10kPB72O0ACnCT8XSjLeakqPiVHx0Hj1_tOuxXcmHDZxID6id8mp_IZSUUJvjusY84FCpz_Zgo8yBI4QPYAIllgMn9WCGKB8zBBqj7wWgIIimgsCNGRfjnsf5ZIkWw",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1596523645/strident/prod/gigs/Romania-2020-08-28.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1596523646/strident/prod/gigs/Romania-2020-08-28.jpg",
  },
  {
    name: "21.2 Nick's B-Day bash & Night of Keoss Strident/03/BullShark",
    venue: "Keoss Studios",
    address: "HaMiktsoa 4",
    city: "Tel Aviv",
    date: "2020-02-21T06:30:00.000+00:00",
    fbEvent: "https://www.facebook.com/events/653666635371023/",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1581252690/strident/prod/gigs/KeossStudios-2020-02-21.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1581252691/strident/prod/gigs/KeossStudios-2020-02-21.jpg",
  },
  {
    name: "Fuck You Valentine",
    venue: "Blaze Rock Bar",
    address: "Hilel 23",
    city: "Jerusalem",
    date: "2020-02-15T19:30:00.000+00:00",
    fbEvent: "https://www.facebook.com/events/619466475549365/",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1581252534/strident/prod/gigs/BlazeRockBar-2020-02-15.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1581252535/strident/prod/gigs/BlazeRockBar-2020-02-15.jpg",
  },
  {
    name: "March Of Plague Release Show",
    venue: "Ozen Bar",
    address: "King George 48",
    city: "Tel Aviv",
    date: "2020-01-16T18:00:00.000+00:00",
    fbEvent: "https://www.facebook.com/events/533651297231767/",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1578320864/strident/prod/gigs/OzenBar-%D7%90%D7%95%D7%96%D7%9F%D7%91%D7%A8-2020-01-16.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1578320866/strident/prod/gigs/OzenBar-%D7%90%D7%95%D7%96%D7%9F%D7%91%D7%A8-2020-01-16.jpg",
  },
  {
    name: "Strident ✦ Deusphera ✦ Haifa Double B Studio",
    venue: "Double B Studio",
    address: "Sderot haMeginim 50",
    city: "Haifa",
    date: "2020-01-09T19:00:00.000+00:00",
    fbEvent: "https://www.facebook.com/events/450176279010284/",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1577345561/strident/prod/gigs/DoubleBStudio-2009-02-01.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1577345561/strident/prod/gigs/DoubleBStudio-2009-02-01.jpg",
  },
  {
    name: "Metal Market, Winter 2019",
    venue: "Ozen Bar",
    address: "King George 48",
    city: "Tel Aviv",
    date: "2019-12-13T09:00:00.000+00:00",
    fbEvent: "https://facebook.com/events/3078518132222268/?ti=cl",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1572985963/strident/prod/gigs/OzenBar-2019-12-13.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1572985964/strident/prod/gigs/OzenBar-2019-12-13.jpg",
  },
  {
    name: "Metal Market, Summer 2019",
    venue: "Ozen Bar",
    address: "King George 48",
    city: "Tel Aviv",
    date: "2019-08-16T08:00:00.000+00:00",
    fbEvent: "https://www.facebook.com/events/359885801359936/",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571401488/strident/prod/gigs/OzenBar-2019-08-16.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1571401489/strident/prod/gigs/OzenBar-2019-08-16.jpg",
  },
  {
    name: "The Show Of Undead, Part 3",
    venue: "Art Hall",
    address: "Ben Avigdor 10",
    city: "Tel Aviv",
    date: "2019-07-12T18:00:00.000+00:00",
    fbEvent: "https://www.facebook.com/events/781053508956086/",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571401474/strident/prod/gigs/ArtHall-2019-07-12.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1571401475/strident/prod/gigs/ArtHall-2019-07-12.jpg",
  },
  {
    name: "The Show Of Undead, Part 2",
    venue: "Art Hall",
    address: "Ben Avigdor 10",
    city: "Tel Aviv",
    date: "2019-06-13T18:00:00.000+00:00",
    fbEvent: "https://www.facebook.com/events/2220730884714744/",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1571401504/strident/prod/gigs/ArtHall-2019-06-13.jpg",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1571401505/strident/prod/gigs/ArtHall-2019-06-13.jpg",
  },
  {
    name: "The Show Of Undead, part 1",
    venue: "Art Hall",
    address: "Ben Avigdor 10",
    city: "Tel Aviv",
    date: "2019-05-10T17:00:00.000+00:00",
    fbEvent: "https://www.facebook.com/events/491926848006835/?ti=cl",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1572472935/strident/prod/gigs/ArtHall-2019-05-10.png",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1572472936/strident/prod/gigs/ArtHall-2019-05-10.jpg",
  },
  {
    name: "Death B'Av",
    venue: "Gagarin",
    address: "Shalma 46",
    city: "Tel Aviv",
    date: "2018-07-18T17:00:00.000+00:00",
    fbEvent: "https://www.facebook.com/events/952245078268944/?ti=cl",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/v1572473665/strident/prod/gigs/Gagarin-2018-07-18.png",
    imageNG:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1572473666/strident/prod/gigs/Gagarin-2018-07-18.jpg",
  },
];

export default gigs;
