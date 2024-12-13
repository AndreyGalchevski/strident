export interface Gig {
  name: string;
  venue: string;
  address: string;
  city: string;
  date: string;
  fbEvent: string;
  image: string;
}

const gigs: Array<Gig> = [
  {
    name: '20th Anniversary',
    venue: 'Yellow Submarine',
    address: 'Ha-Rekhavim 11',
    city: 'Jerusalem',
    date: '2024-12-26T18:30:00Z',
    fbEvent: 'https://www.facebook.com/events/8470402013043601/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1734092512/strident/prod/gigs/464911416_122179474496185595_1773948077982607932_n.jpg',
  },
  {
    name: '20th Anniversary',
    venue: 'Tmuna',
    address: 'Soncino 8',
    city: 'Tel Aviv',
    date: '2024-12-19T19:30:00Z',
    fbEvent: 'https://www.facebook.com/events/1133389321788229/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1734092334/strident/prod/gigs/465661870_1073982204731714_8854821807713072333_n.jpg',
  },
  {
    name: 'End Of Summer',
    venue: 'Wunderbar',
    address: 'Hativat Golani 16',
    city: 'Haifa',
    date: '2024-08-29T17:00:00Z',
    fbEvent: 'https://www.facebook.com/events/806269561490756/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1734091928/strident/prod/gigs/454289199_1085501093411932_8458170157034304011_n.jpg',
  },
  {
    name: 'Strident and Xoter LIVE at Blaze Rock Bar - Jerusalem',
    venue: 'Blaze',
    address: 'Hillel 23',
    city: 'Jerusalem',
    date: '2024-07-02T18:00:00Z',
    fbEvent: 'https://www.facebook.com/events/1394363498622875/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1734091805/strident/prod/gigs/449054324_974605831336019_3437938737204879629_n.jpg',
  },
  {
    name: 'STRIDENT+INLABYRINTH+PURIFICATION PATH+חיל פושטקים May 11 Haifa',
    venue: 'Z-City club',
    address: 'Natanzon 10',
    city: 'Haifa',
    date: '2024-05-11T17:00:00Z',
    fbEvent: 'https://www.facebook.com/events/946913393475415',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1734091454/strident/prod/gigs/437111109_924345409695395_1616834369454712198_n.jpg',
  },
  {
    name: 'PsychoWard Vol.Oct-7th',
    venue: 'Gagarin',
    address: 'Kibbutz Galuyot 13',
    city: 'Tel Aviv',
    date: '2024-01-27T10:00:00Z',
    fbEvent: 'https://facebook.com/events/s/psychoward-voloct-7th/1083748119434929',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1704356380/strident/prod/gigs/co1zr8ucfjn6ue7kh97m.jpg',
  },
  {
    name: 'Metal shows at Blaze',
    venue: 'Blaze',
    address: 'Hillel 23',
    city: 'Jerusalem',
    date: '2023-11-25T18:30:00Z',
    fbEvent: 'https://www.facebook.com/events/1531605410989826/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1734091222/strident/prod/gigs/404266916_852669533527609_2588624357403970706_n.jpg',
  },
  {
    name: 'Screaming Culture Aug 2023',
    venue: 'Shevrolet',
    address: 'Ha-Manor 9',
    city: 'Holon',
    date: '2023-08-31T17:00:00Z',
    fbEvent:
        'https://eventbuzz.co.il/lp/event/metalemocoreshevrolet?fbclid=IwAR2HwmRxFGa1j5GwO1WyiAkJvgTmDa-Hu9Pik_lbp6z38HbqCGSHDoXj720',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1692951763/strident/dev/gigs/iuoqc8dtmwcd3fauxvav.jpg',
  },
  {
    name: 'European Summer Nights - Timișoara, RO',
    venue: 'Manufactura',
    address: 'Vladimirescu 9',
    city: 'Timișoara',
    date: '2023-08-19T16:00:00Z',
    fbEvent: 'https://www.facebook.com/events/2320197671505944',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1692951306/strident/dev/gigs/sbipbnbi5ye0zy8mhnmz.jpg',
  },
  {
    name: "European Summer Nights '23 - Sofia, BG",
    venue: 'Live \u0026 Loud',
    address: 'Pozitano 8',
    city: 'Sofia',
    date: '2023-08-18T16:00:00Z',
    fbEvent: 'https://www.facebook.com/events/663134155854821',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1692951239/strident/dev/gigs/otq7d0rlhvbhqpe0cjlx.jpg',
  },
  {
    name: 'European Summer Nights - Cluj-Napoca, RO',
    venue: 'Zipp It',
    address: 'Calea Moților 147',
    city: 'Cluj-Napoca',
    date: '2023-08-15T16:00:00Z',
    fbEvent: 'https://www.facebook.com/events/301736952257049',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1692951061/strident/dev/gigs/uiuraswedkeofqt0luof.jpg',
  },
  {
    name: 'European Summer Nights - Budapest, HU',
    venue: 'S8 Underground Club',
    address: 'Kerepesi 26',
    city: 'Budapest',
    date: '2023-08-14T16:00:00Z',
    fbEvent: 'https://www.facebook.com/events/648596780245304',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1692950993/strident/dev/gigs/pltwziqjwhdofg6a78x4.jpg',
  },
  {
    name: "European Summer Nights '23 - Krakow, PL",
    venue: "Rust'n'Roll Music Pub",
    address: 'Stefana Batorego 1',
    city: 'Kraków',
    date: '2023-08-11T16:00:00Z',
    fbEvent: 'https://www.facebook.com/events/772235154683446',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1692950904/strident/dev/gigs/byv1zb1yvnrpdcppfhla.jpg',
  },
  {
    name: "European Summer Nights '23 - PRAHA, CZ",
    venue: 'Hospoda Brouk',
    address: 'Vltavská 533',
    city: 'Praha',
    date: '2023-08-10T16:00:00Z',
    fbEvent: 'https://www.facebook.com/events/2122431864791047',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1692950804/strident/dev/gigs/byysm3yjtsovgr8enmdi.jpg',
  },
  {
    name: 'Thrashamania 2023',
    venue: 'HaMiflat',
    address: 'HaMiktsoa 6',
    city: 'Tel Aviv',
    date: '2023-01-12T16:30:00Z',
    fbEvent: 'https://www.facebook.com/events/811665853256618',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1673894213/strident/prod/gigs/w4sssqkw7lwoybaeiz90.jpg',
  },
  {
    name: 'Battle For The North',
    venue: 'Wunderbar',
    address: 'Hativat Golani 18',
    city: 'Haifa',
    date: '2022-10-01T17:00:00Z',
    fbEvent: 'https://fb.me/e/2EOm0Nl0z',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1662664964/strident/prod/gigs/battle-for-the-north.jpg',
  },
  {
    name: 'Metal 4 Peace',
    venue: 'Gagarin',
    address: 'Kibutz Galuyot 13',
    city: 'Tel Aviv',
    date: '2022-04-02T17:00:00Z',
    fbEvent: 'https://fb.me/e/2sGndwGD9',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1662664966/strident/prod/gigs/metal-4-peace.jpg',
  },
  {
    name: 'YANA ORQO Live Online Fest',
    venue: 'Peru',
    address: 'World wide',
    city: 'Web',
    date: '2020-08-31T18:00:00Z',
    fbEvent: '',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1596523725/strident/prod/gigs/Peru-2020-09-01.jpg',
  },
  {
    name: 'Bloody News Online Fest',
    venue: 'Romania',
    address: 'World wide',
    city: 'Web',
    date: '2020-08-27T18:00:00Z',
    fbEvent:
        'https://www.facebook.com/events/335636320939954/?acontext=%7B%22source%22%3A3%2C%22source_newsfeed_story_type%22%3A%22regular%22%2C%22action_history%22%3A%22%5B%7B%5C%22surface%5C%22%3A%5C%22newsfeed%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22feed_story%5C%22%2C%5C%22extra_data%5C%22%3A%5B%5D%7D%5D%22%2C%22has_source%22%3Atrue%7D\u0026source=3\u0026source_newsfeed_story_type=regular\u0026action_history=%5B%7B%22surface%22%3A%22newsfeed%22%2C%22mechanism%22%3A%22feed_story%22%2C%22extra_data%22%3A%5B%5D%7D%5D\u0026has_source=1\u0026__tn__=K-R\u0026eid=ARBYDQ-JVTL8GNNH3iEZHaMkiv3j9CiLnP1xm4Hd6hThOQqAOPpxdc12BzJODi2FE3zlKmbMcYyhDNq6\u0026fref=mentions\u0026__xts__%5B0%5D=68.ARBR_MVP6pNZ2MBnMk7iLOdqsEL4QAKioaKLdXEBhjsvO9I6z70Bs_n7iKDdejfzuLYPktG9zpHflakZitL6B3ysaD0iwI0LutncBbFkx6-qRyfuqnS5wape-Lex688LZP_tANJw_2a9FEk27zNa4jVnRNBCJ6E4vSeL8uxefXSQGfR9sQDdg6TqHXU9NBMHMTwQUHtehxMMQGAy1ldBP3zfcl-k10kPB72O0ACnCT8XSjLeakqPiVHx0Hj1_tOuxXcmHDZxID6id8mp_IZSUUJvjusY84FCpz_Zgo8yBI4QPYAIllgMn9WCGKB8zBBqj7wWgIIimgsCNGRfjnsf5ZIkWw',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1596523645/strident/prod/gigs/Romania-2020-08-28.jpg',
  },
  {
    name: 'Moshpit Balagan',
    venue: 'Levontin7',
    address: 'Levontin 7',
    city: 'Tel Aviv',
    date: '2020-08-05T18:00:00Z',
    fbEvent: 'https://fb.me/e/1z56ClNSx',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1662664967/strident/prod/gigs/moshpit-balagan.jpg',
  },
  {
    name: 'Rock Show',
    venue: 'Art Club',
    address: 'Kibutz Galuyot 45',
    city: 'Tel Aviv',
    date: '2020-04-14T18:00:00Z',
    fbEvent: 'https://fb.me/e/3bZWPffIY',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1662664964/strident/prod/gigs/rock-show.jpg',
  },
  {
    name: "21.2 Nick's B-Day bash \u0026 Night of Keoss Strident/03/BullShark",
    venue: 'Keoss Studios',
    address: 'HaMiktsoa 4',
    city: 'Tel Aviv',
    date: '2020-02-21T06:30:00Z',
    fbEvent: 'https://www.facebook.com/events/653666635371023/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1581252690/strident/prod/gigs/KeossStudios-2020-02-21.jpg',
  },
  {
    name: 'Epicenter',
    venue: 'Jan Jack',
    address: 'Sontsino 17',
    city: 'Tel Aviv',
    date: '2020-02-17T18:00:00Z',
    fbEvent: 'https://fb.me/e/1km15UkD6',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1662664969/strident/prod/gigs/epi_center.jpg',
  },
  {
    name: 'Fuck You Valentine',
    venue: 'Blaze Rock Bar',
    address: 'Hilel 23',
    city: 'Jerusalem',
    date: '2020-02-15T19:30:00Z',
    fbEvent: 'https://www.facebook.com/events/619466475549365/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1581252534/strident/prod/gigs/BlazeRockBar-2020-02-15.jpg',
  },
  {
    name: 'March Of Plague Release Show',
    venue: 'Ozen Bar',
    address: 'King George 48',
    city: 'Tel Aviv',
    date: '2020-01-16T18:00:00Z',
    fbEvent: 'https://www.facebook.com/events/533651297231767/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1578320864/strident/prod/gigs/OzenBar-%D7%90%D7%95%D7%96%D7%9F%D7%91%D7%A8-2020-01-16.jpg',
  },
  {
    name: 'Strident ✦ Deusphera ✦ Haifa Double B Studio',
    venue: 'Double B Studio',
    address: 'Sderot haMeginim 50',
    city: 'Haifa',
    date: '2020-01-09T19:00:00Z',
    fbEvent: 'https://www.facebook.com/events/450176279010284/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1577345561/strident/prod/gigs/DoubleBStudio-2009-02-01.jpg',
  },
  {
    name: 'Metal Market, Winter 2019',
    venue: 'Ozen Bar',
    address: 'King George 48',
    city: 'Tel Aviv',
    date: '2019-12-13T09:00:00Z',
    fbEvent: 'https://facebook.com/events/3078518132222268/?ti=cl',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1572985963/strident/prod/gigs/OzenBar-2019-12-13.jpg',
  },
  {
    name: 'Metal Market, Summer 2019',
    venue: 'Ozen Bar',
    address: 'King George 48',
    city: 'Tel Aviv',
    date: '2019-08-16T08:00:00Z',
    fbEvent: 'https://www.facebook.com/events/359885801359936/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1571401488/strident/prod/gigs/OzenBar-2019-08-16.jpg',
  },
  {
    name: 'The Show Of Undead, Part 3',
    venue: 'Art Hall',
    address: 'Ben Avigdor 10',
    city: 'Tel Aviv',
    date: '2019-07-12T18:00:00Z',
    fbEvent: 'https://www.facebook.com/events/781053508956086/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1571401474/strident/prod/gigs/ArtHall-2019-07-12.jpg',
  },
  {
    name: 'The Show Of Undead, Part 2',
    venue: 'Art Hall',
    address: 'Ben Avigdor 10',
    city: 'Tel Aviv',
    date: '2019-06-13T18:00:00Z',
    fbEvent: 'https://www.facebook.com/events/2220730884714744/',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1571401504/strident/prod/gigs/ArtHall-2019-06-13.jpg',
  },
  {
    name: 'The Show Of Undead, part 1',
    venue: 'Art Hall',
    address: 'Ben Avigdor 10',
    city: 'Tel Aviv',
    date: '2019-05-10T17:00:00Z',
    fbEvent: 'https://www.facebook.com/events/491926848006835/?ti=cl',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1572472935/strident/prod/gigs/ArtHall-2019-05-10.png',
  },
  {
    name: "Death B'Av",
    venue: 'Gagarin',
    address: 'Shalma 46',
    city: 'Tel Aviv',
    date: '2018-07-18T17:00:00Z',
    fbEvent: 'https://www.facebook.com/events/952245078268944/?ti=cl',
    image:
        'https://res.cloudinary.com/dqvimfd8b/image/upload/v1572473665/strident/prod/gigs/Gagarin-2018-07-18.png',
  },
];

export default gigs;
