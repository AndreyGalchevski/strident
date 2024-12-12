const baseURL = "https://res.cloudinary.com/dqvimfd8b/image/upload";

export interface HomeImage {
    src: string;
    alt: string;
    thumbnail: string;
}

const homeImages: Array<HomeImage> = [
    {
        src: `${baseURL}/v1674307966/strident/dev/home/IMG_1608.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200/v1674307966/strident/dev/home/IMG_1608.jpg`,
        alt: "Strident performing in Tel Aviv",
    },
    {
        src: `${baseURL}/v1692944566/strident/prod/home/Home-Sofia-1.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200/v1692944566/strident/prod/home/Home-Sofia-1.jpg`,
        alt: "Strident performing in Sofia (BG)",
    },
    {
        src: `${baseURL}/v1692944566/strident/prod/home/Home-Sofia-2.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200/v1692944566/strident/prod/home/Home-Sofia-2.jpg`,
        alt: "Strident performing in Sofia (BG)",
    },
    {
        src: `${baseURL}/v1692944566/strident/prod/home/Home-Sofia-3.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200/v1692944566/strident/prod/home/Home-Sofia-3.jpg`,
        alt: "Strident performing in Sofia (BG)",
    },
    {
        src: `${baseURL}/v1674308005/strident/dev/home/IMG_1580.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200,g_face/v1674308005/strident/dev/home/IMG_1580.jpg`,
        alt: "Strident performing in Tel Aviv",
    },
    {
        src: `${baseURL}/v1674308017/strident/dev/home/IMG_1563.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200,g_face/v1674308017/strident/dev/home/IMG_1563.jpg`,
        alt: "Strident performing in Tel Aviv",
    },
    {
        src: `${baseURL}/v1570914452/strident/prod/home/4.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200,g_face/v1570914452/strident/prod/home/4.jpg`,
        alt: "Strident performing in Kiev",
    },
    {
        src: `${baseURL}/v1570914455/strident/prod/home/5.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200,g_face/v1570914455/strident/prod/home/5.jpg`,
        alt: "Strident performing in Kiev",
    },
    {
        src: `${baseURL}/v1674308035/strident/dev/home/andrey-1.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200,g_face/v1674308035/strident/dev/home/andrey-1.jpg`,
        alt: "Strident performing in Tel Aviv",
    },
    {
        src: `${baseURL}/v1570914457/strident/prod/home/7.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200,g_face/v1570914457/strident/prod/home/7.jpg`,
        alt: "Strident performing in Kiev",

    },
    {
        src: `${baseURL}/v1674307996/strident/dev/home/IMG_6641.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200,g_face/v1674307996/strident/dev/home/IMG_6641.jpg`,
        alt: "Strident performing in Tel Aviv",
    },
    {
        src: `${baseURL}/v1570914452/strident/prod/home/10.jpg`,
        thumbnail: `${baseURL}/c_thumb,w_200,g_face/v1570914452/strident/prod/home/10.jpg`,
        alt: "Strident performing in Tel Aviv",
    },
];

export default homeImages