import Container from "../../styled/Container";
import { Masonry, MasonryBrick } from "../../styled/Masonry";
import { Card, CardContent } from "../../styled/Card";
import Header from "../../components/Header";
import albums from "../../data/albums";
import Head from "../../components/Head";

const Albums = () => (
  <Container>
    <Head
      path="/albums"
      pageTitle="Strident - Official Streaming"
      pageDescription="Official Strident music streaming"
    />
    <Header title="Albums" />
    <Masonry>
      {albums.map((album) => (
        <MasonryBrick key={album.name}>
          <Card>
            <CardContent style={{ padding: 0 }}>
              <iframe
                title={album.name}
                src={album.url}
                frameBorder="0"
                allow="encrypted-media"
                width="100%"
                height={500}
                style={{ borderRadius: 30 }}
              />
            </CardContent>
          </Card>
        </MasonryBrick>
      ))}
    </Masonry>
  </Container>
);

export default Albums;
