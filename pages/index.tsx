import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import useMediaQuery from "../hooks/useMediaQuery";
import Container from "../styled/Container";
import { Card, CardContent, CardTitle, CardAction } from "../styled/Card";
import ResponsiveText from "../styled/ResponsiveText";
import Header from "../components/Header";
import { COLORS, homeImages } from "../utils/constants";
import Head from "../components/Head";
import gigs from "../data/gigs";
import Link from "next/link";

const BannerContainer = styled.div({
  marginBottom: 20,
});

const Banner = styled.img({
  height: "74vh",
  maxWidth: "90vw",
  boxShadow: `0 4px 8px 0 ${COLORS.BLACK}, 0 6px 20px 0 ${COLORS.BLACK}`,
});

const Wrapper = styled.div<{ isMobile: boolean }>(({ isMobile }) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  marginBottom: 20,
}));

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const latestGigs = gigs.slice(0, 3);

  return (
    <Container>
      <Head
        path=""
        pageTitle="Strident - Official Website"
        pageDescription="Strident - Israeli Thrash Metal"
      />
      <Header title="Home" />
      <BannerContainer>
        <picture>
          <source
            media="(max-width: 785px)"
            srcSet="https://res.cloudinary.com/dqvimfd8b/image/upload/v1572275145/strident/app/march-of-plague-banner-high-ng.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 785px)"
            srcSet="https://res.cloudinary.com/dqvimfd8b/image/upload/v1572274125/strident/app/march-of-plague-banner-high.jpg"
            type="image/jpeg"
          />
          <source
            media="(min-width: 786px)"
            srcSet="https://res.cloudinary.com/dqvimfd8b/image/upload/v1572275146/strident/app/march-of-plague-banner-wide-ng.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 786px)"
            srcSet="https://res.cloudinary.com/dqvimfd8b/image/upload/v1572274888/strident/app/march-of-plague-banner-wide.jpg"
            type="image/jpeg"
          />
          <Banner
            src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1572274125/strident/app/march-of-plague-banner-high.jpg"
            alt="New Album banner"
          />
        </picture>
      </BannerContainer>
      <Wrapper isMobile={isMobile}>
        <Card style={{ margin: 8, flex: 1 }}>
          <CardContent>
            <CardTitle>About</CardTitle>
            <ResponsiveText isMobile={isMobile}>
              Strident is a thrash metal band formed in 2004 in the ancient city
              of Be`er Sheva (Israel). Starting from playing cover versions of
              such famous groups as Iron Maiden, AC / DC, etc and having come a
              long way, they found their style on the Israeli metal scene
            </ResponsiveText>
          </CardContent>
          <CardAction>
            <Link href="/about" style={{ color: COLORS.WHITE }}>
              Read more
            </Link>
          </CardAction>
        </Card>
        <Card style={{ margin: 8, flex: 1 }}>
          <CardContent style={{ padding: 0, height: 343 }}>
            <iframe
              title="STRIDENT - No Faith No War"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3MpjGJpmG-Y"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
            />
          </CardContent>
          <CardAction>
            <Link href="/videos" style={{ color: COLORS.WHITE }}>
              More videos
            </Link>
          </CardAction>
        </Card>
      </Wrapper>
      <ImageGallery items={homeImages} />
      <Wrapper isMobile={isMobile} style={{ marginTop: 20 }}>
        <Card style={{ margin: 8, flex: 1 }}>
          <CardContent>
            <CardTitle>Gigs</CardTitle>
            {latestGigs.map((gig) => (
              <div key={gig.name}>
                <p>{new Date(gig.date).toDateString()}</p>
                <p>
                  {gig.name} - {gig.venue}
                </p>
                <p>{gig.city}</p>
                <hr />
              </div>
            ))}
          </CardContent>
          <CardAction>
            <Link href="/gigs" style={{ color: COLORS.WHITE }}>
              More gigs
            </Link>
          </CardAction>
        </Card>
        <Card style={{ margin: 8, flex: 1 }}>
          <CardContent style={{ padding: 0, height: 451 }}>
            <iframe
              title="Strident Spotify page"
              src="https://open.spotify.com/embed/artist/1iLO8tqlkfiQMWf7JqaNE3"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="encrypted-media"
              style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
            />
          </CardContent>
          <CardAction>
            <Link href="/songs" style={{ color: COLORS.WHITE }}>
              More songs
            </Link>
          </CardAction>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Home;
