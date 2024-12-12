import Container from "../../styled/Container";
import { Masonry, MasonryBrick } from "../../styled/Masonry";
import { Card, CardContent } from "../../styled/Card";
import Header from "../../components/Header";
import videos from "../../data/videos";
import Head from "../../components/Head";

const Videos = () => (
  <Container>
    <Head
      path="/videos"
      pageTitle="Strident - Official Music Videos"
      pageDescription="Official Strident music videos"
    />
    <Header title="Videos" />
    <Masonry>
      {videos.map((video) => (
        <MasonryBrick key={video.name}>
          <Card>
            <CardContent style={{ padding: 0 }}>
              <iframe
                title={video.name}
                src={video.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                width="100%"
                height="315"
                style={{ borderRadius: 30 }}
              />
            </CardContent>
          </Card>
        </MasonryBrick>
      ))}
    </Masonry>
  </Container>
);

export default Videos;
