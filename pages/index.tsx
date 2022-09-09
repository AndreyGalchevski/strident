import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import Link from "next/link";
import "react-image-gallery/styles/css/image-gallery.css";

import Container from "../styled/Container";
import { Card, CardContent, CardTitle, CardAction } from "../styled/Card";
import ResponsiveText from "../styled/ResponsiveText";
import Header from "../components/Header";
import { homeImages } from "../utils/constants";
import Head from "../components/Head";
import gigs from "../data/gigs";
import theme from "../utils/theme";

const BannerContainer = styled.div({
  marginBottom: 20,
});

const Banner = styled.img`
  height: 74vh;
  max-width: 90vw;
  box-shadow: 0 4px 8px 0 ${({ theme }) => theme.colors.black},
    0 6px 20px 0 ${({ theme }) => theme.colors.black};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
  }
`;

const latestGigs = gigs.slice(0, 3);

const Home = () => (
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
    <Wrapper>
      <Card style={{ margin: 8, flex: 1 }}>
        <CardContent>
          <CardTitle>About</CardTitle>
          <ResponsiveText>
            Strident is a thrash metal band formed in 2004 in the ancient city
            of Be`er Sheva (Israel). Starting from playing cover versions of
            such famous groups as Iron Maiden, AC / DC, etc and having come a
            long way, they found their style on the Israeli metal scene
          </ResponsiveText>
        </CardContent>
        <CardAction>
          <Link href="/about" style={{ color: theme.colors.white }}>
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
          <Link href="/videos" style={{ color: theme.colors.white }}>
            More videos
          </Link>
        </CardAction>
      </Card>
    </Wrapper>
    <ImageGallery items={homeImages} />
    <Wrapper style={{ marginTop: 20 }}>
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
          <Link href="/gigs" style={{ color: theme.colors.white }}>
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
          <Link href="/songs" style={{ color: theme.colors.white }}>
            More songs
          </Link>
        </CardAction>
      </Card>
    </Wrapper>
  </Container>
);

export default Home;
