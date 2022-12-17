import NextHead from "next/head";

interface Props {
  path: string;
  pageTitle: string;
  pageDescription: string;
}

const Head = ({ path, pageTitle, pageDescription }: Props) => (
  <NextHead>
    <title>{pageTitle}</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={`https://strident.band${path}`} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={pageDescription} />

    <meta name="og:url" content={`https://strident.band${path}`} />
    <meta name="og:type" content="website" />
    <meta name="og:site_name" content="Strident" />
    <meta name="og:title" content={pageTitle} />
    <meta name="og:description" content={pageDescription} />
    <meta
      name="og:image"
      content="https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1571406645/strident/prod/home/1.jpg"
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
  </NextHead>
);

export default Head;
