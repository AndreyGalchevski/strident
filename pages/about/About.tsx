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
            Strident is a thrash metal band formed in 2004 in the ancient city
            of Be`er Sheva (Israel). Starting from playing cover versions of
            such famous groups as Iron Maiden, AC / DC, etc and having come a
            long way, they found their style on the Israeli metal scene, despite
            the fact that in those years the scene was flooded with black metal
            and many hardcore bands. The group released its first album “On Aim”
            (2010), which raised the main problems of this world, on its own,
            thus challenging other popular styles. This album has become
            somewhat legendary, as it was the first full-length thrash metal
            album released in Israel back in the day. On 29 November 2019, their
            second album will out worldwide through Punishment 18 Records. The
            best thrash for lovers and connoisseurs of this style.
          </ResponsiveText>
          <ResponsiveText>Thrash `till Death!</ResponsiveText>
        </CardContent>
      </Card>
    </Wrapper>
  </Container>
);

export default About;
