import styled from "styled-components";

import Container from "../../styled/Container";
import { Masonry, MasonryBrick } from "../../styled/Masonry";
import { Card, CardContent, CardTitle, CardImage } from "../../styled/Card";
import HalfwayTab from "../../styled/HalfwayTab";
import Header from "../../components/Header";
import ShoppingCartIcon from "../../components/icons/ShoppingCart";
import EuroIcon from "../../components/icons/Euro";
import merchandises from "../../data/merchandises";
import Head from "../../components/Head";

const PriceContainer = styled.p({
  display: "flex",
  FlexDirectionProperty: "row",
  justifyContent: "center",
});


const Merch = () => (
  <Container>
    <Head
      path="/merch"
      pageTitle="Strident - Official merch"
      pageDescription="Official Strident merchandise"
    />
    <Header title="Merch" />
    <Masonry>
      {merchandises.map((merchandise) => (
        <MasonryBrick key={`${merchandise.name}-${merchandise.type}`}>
          <Card>
            <div>
              <picture>
                <source srcSet={merchandise.imageNG} type="image/webp" />
                <source srcSet={merchandise.image} type="image/jpeg" />
                <CardImage src={merchandise.image} alt="" />
              </picture>
            </div>
            <HalfwayTab
              href={merchandise.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ bottom: 156 }}
            >
              <ShoppingCartIcon style={{ marginTop: 8 }} />
            </HalfwayTab>
            <CardContent style={{ maxHeight: 184 }}>
              <CardTitle>{merchandise.name}</CardTitle>
              <p>{merchandise.type}</p>
              <PriceContainer>
                <EuroIcon style={{ marginRight: 4 }} />
                <span> {merchandise.price} EUR</span>
              </PriceContainer>
            </CardContent>
          </Card>
        </MasonryBrick>
      ))}
    </Masonry>
  </Container>
);

export default Merch;
