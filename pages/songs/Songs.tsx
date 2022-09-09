import Container from "../../styled/Container";
import { Masonry, MasonryBrick } from "../../styled/Masonry";
import { Card, CardContent } from "../../styled/Card";
import Header from "../../components/Header";
import songs from "../../data/songs";
import Head from "../../components/Head";

const Songs = () => (
  <Container>
    <Head
      path="/songs"
      pageTitle="Strident - Official Streaming"
      pageDescription="Official Strident music streaming"
    />
    <Header title="Songs" />
    <Masonry>
      {songs.map((song) => (
        <MasonryBrick key={song.name}>
          <Card>
            <CardContent style={{ padding: 0 }}>
              <iframe
                title={song.name}
                src={song.url}
                frameBorder="0"
                allow="encrypted-media"
                width="100%"
                height="60%"
                style={{ borderRadius: 30 }}
              />
            </CardContent>
          </Card>
        </MasonryBrick>
      ))}
    </Masonry>
  </Container>
);

export default Songs;
