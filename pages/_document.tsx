import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import {JSX} from "react";

const structuredData = {
  "@context": "http://schema.org",
  "@type": "MusicGroup",
  // "@id": "https://musicbrainz.org/artist/455707a4-a273-4b12-a26f-fcd41abef63a",
  name: "Strident",
  description: "Israeli Thrash Metal",
  // logo: {
  //   "@type": "ImageObject",
  //   url: "https://res.cloudinary.com/dqvimfd8b/image/upload/v1618120314/vermintide/fb-logo.png",
  // },
  image: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1571406645/strident/prod/home/1.jpg",
  },
  url: "https://strident.band",
  genre: ["Thrash Metal"],
  sameAs: [
    "https://www.facebook.com/stridentthrash",
    "https://www.instagram.com/strident.thrash",
    "https://www.youtube.com/channel/UCMgz7_nUJ-bDnI9HhrHWx2A",
    "https://open.spotify.com/artist/1iLO8tqlkfiQMWf7JqaNE3",
  ],
  // album: {
  //   "@type": "MusicAlbum",
  //   name: "Meaningless Convulsions",
  //   "@id":
  //     "https://musicbrainz.org/release-group/700a41d7-150b-48e2-a6fc-75a6df92f48d",
  //   datePublished: "2011",
  // },
  member: [
    {
      "@type": "OrganizationRole",
      member: {
        "@type": "Person",
        name: "Michael Shliapochny",
      },
      roleName: "lead vocals and lead guitar",
    },
    {
      "@type": "OrganizationRole",
      member: {
        "@type": "Person",
        name: "Yaniv Alkalay",
      },
      roleName: "guitar",
    },
    {
      "@type": "OrganizationRole",
      member: {
        "@type": "Person",
        name: "Artem Apekishev",
      },
      roleName: "bass",
    },
    {
      "@type": "OrganizationRole",
      member: {
        "@type": "Person",
        name: "Andrey Galchevski",
      },
      roleName: "drums",
    },
  ],
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Special+Elite&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
