import styled from "styled-components";

import Container from "../../styled/Container";
import { Masonry, MasonryBrick } from "../../styled/Masonry";
import { Card, CardTitle, CardContent } from "../../styled/Card";
import Header from "../../components/Header";
import lyrics from "../../data/lyrics";
import Head from "../../components/Head";

const Text = styled.pre({
  fontFamily: '"Special Elite", cursive',
  fontSize: "13px",
  lineHeight: 1.5,
});

const Lyrics = () => (
  <Container>
    <Head
      path="/lyrics"
      pageTitle="Strident - Lyrics"
      pageDescription="Strident official lyrics"
    />
    <Header title="Lyrics" />
    <Masonry>
      {lyrics.map((lyric) => (
        <MasonryBrick key={lyric.name}>
          <Card>
            <CardTitle style={{ paddingTop: 20 }}>{lyric.name}</CardTitle>
            <CardContent style={{ paddingTop: 0 }}>
              <Text>{lyric.text}</Text>
            </CardContent>
          </Card>
        </MasonryBrick>
      ))}
    </Masonry>
  </Container>
);

export default Lyrics;
