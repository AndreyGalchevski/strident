import { FunctionComponent } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";
import { formatDate, formatTime } from "../../utils/general";
import Container from "../../styled/Container";
import { Masonry, MasonryBrick } from "../../styled/Masonry";
import { Card, CardContent, CardImage } from "../../styled/Card";
import HalfwayTab from "../../styled/HalfwayTab";
import Header from "../../components/Header";
import DirectionsIcon from "../../components/icons/Directions";
import EventIcon from "../../components/icons/Event";
import gigs from "../../data/gigs";

const Gigs: FunctionComponent = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <Container>
      <Header title="Gigs" />
      <Masonry isMobile={isMobile}>
        {gigs.map((gig) => (
          <MasonryBrick key={gig.name}>
            <Card>
              <div>
                <picture>
                  <source srcSet={gig.imageNG} type="image/webp" />
                  <source srcSet={gig.image} type="image/jpeg" />
                  <CardImage src={gig.image} alt="" />
                </picture>
              </div>
              <CardContent style={{ maxHeight: 202 }}>
                <HalfwayTab
                  href={gig.fbEvent}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EventIcon color="#3b5998" style={{ marginTop: 8 }} />
                </HalfwayTab>
                <HalfwayTab
                  href={`https://www.google.com/maps/search/?api=1&query=${gig.venue} ${gig.city}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ right: "auto", left: 24 }}
                >
                  <DirectionsIcon color="#4A89F3" style={{ marginTop: 8 }} />
                </HalfwayTab>
                <p>{gig.venue}</p>
                <p>
                  {gig.address}, {gig.city}
                </p>
                <p>{formatDate(new Date(gig.date))}</p>
                <p>{formatTime(new Date(gig.date))}</p>
              </CardContent>
            </Card>
          </MasonryBrick>
        ))}
      </Masonry>
    </Container>
  );
};

export default Gigs;
