import styled from "styled-components";
import Link from "next/link";

import Container from "../styled/Container";
import { Card, CardContent, CardTitle, CardAction } from "../styled/Card";
import ResponsiveText from "../styled/ResponsiveText";
import Header from "../components/Header";
import Head from "../components/Head";
import gigs from "../data/gigs";
import theme from "../utils/theme";
import ImageGallery from "../components/ImageGallery";
import homeImages from "../data/homeImages";

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

    <ImageGallery images={homeImages} />


    <Wrapper>
      <Card style={{ margin: 8, flex: 1 }}>
        <CardContent>
          <CardTitle>About</CardTitle>
          <ResponsiveText>
            An Israeli Thrash Metal machine, Strident is heavily armed with
            old school riffs and the 80s vibe.
          </ResponsiveText>
          <ResponsiveText>
            Since its inception in 2005, Strident has had three full-length
            studio albums and a huge number of live performances.
          </ResponsiveText>
          <ResponsiveText>The band's debut LP entitled "On the Aim" came out in 2010...</ResponsiveText>
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
              title="STRIDENT - Hard-Bitten"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/hcS-I-ECtNw"
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
          <Link href="/albums" style={{ color: theme.colors.white }}>
            More music
          </Link>
        </CardAction>
      </Card>
    </Wrapper>
  </Container>
);

export default Home;
