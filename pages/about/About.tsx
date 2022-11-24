import styled from "styled-components";

import Header from "../../components/Header";
import Container from "../../styled/Container";
import ResponsiveText from "../../styled/ResponsiveText";
import { Card, CardContent } from "../../styled/Card";
import Head from "../../components/Head";

const Wrapper = styled.div`
  width: 90vw;
  margin: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 70vw;
  }
`;

const About = () => (
  <Container>
    <Head
      path="/about"
      pageTitle="Strident - About"
      pageDescription="A brief history of Strident"
    />
    <Header title="About" />
    <Wrapper>
      <Card>
        <CardContent>
          <ResponsiveText>
            Strident is a Thrash Metal band formed in 2004 in the ancient city
            of Be`er Sheva (Israel). Starting from playing cover versions of
            such famous groups as Iron Maiden, AC / DC, etc and having come a
            long way, they found their style in the Israeli metal scene, despite
            the fact that in those years the scene was flooded with black metal
            and many hardcore bands. style.
          </ResponsiveText>
          <ResponsiveText>
            The group released its first album “On Aim” (2010), which raised the
            main problems of this world, on its own, thus challenging other
            popular styles. This album has become somewhat legendary, as it was
            the first full-length thrash metal album released in Israel back in
            the day.
          </ResponsiveText>
          <ResponsiveText>
            On 29 November 2019, the second album “March Of Plague” was released
            worldwide through Punishment 18 Records
          </ResponsiveText>
          <ResponsiveText>
            In the Autumn of 2022 the band did their first European tour along
            with 3000AD supporting the German Thrash legends Necronomicon - the
            tour that was postponed for 2 years due to the Covid pandemic
          </ResponsiveText>
          <ResponsiveText>
            Today the band is working on the third studio album which will see
            the light of day in the early 2023
          </ResponsiveText>
          <ResponsiveText>Thrash Till Death!</ResponsiveText>
        </CardContent>
      </Card>
    </Wrapper>
  </Container>
);

export default About;
