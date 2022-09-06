import { FunctionComponent } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";
import Container from "../../styled/Container";
import { Masonry, MasonryBrick } from "../../styled/Masonry";
import { Card, CardContent, CardAction } from "../../styled/Card";
import Header from "../../components/Header";
import videos from "../../data/videos";

const Videos: FunctionComponent = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <Container>
      <Header title="Videos" />
      <Masonry isMobile={isMobile}>
        {videos.map((video) => (
          <MasonryBrick key={video.name}>
            <Card>
              <CardContent style={{ padding: 0 }}>
                <iframe
                  title={video.name}
                  src={video.url}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  frameBorder="0"
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
};

export default Videos;
