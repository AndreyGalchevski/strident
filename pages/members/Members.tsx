import styled from "styled-components";

import Container from "../../styled/Container";
import { Card, CardTitle, CardContent, CardImage } from "../../styled/Card";
import Header from "../../components/Header";
import members from "../../data/members";
import Head from "../../components/Head";

const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
  }
`;

const MemberItem = styled.div({
  paddingRight: "2vh",
  paddingLeft: "2vh",
});

const Members = () => (
  <Container>
    <Head
      path="/members"
      pageTitle="Strident - Band Members"
      pageDescription="Strident band members"
    />
    <Header title="Members" />
    <MembersContainer>
      {members.map((member) => (
        <MemberItem key={member.name}>
          <Card>
                {/*<source srcSet={member.image} type="image/jpeg" />*/}
                {/*<CardImage src={member.image} alt="" />*/}
                  <CardImage
                      src={member.image}
                      alt="Member image"
                      layout="intrinsic"
                      objectFit="contain"
                      width={800}
                      height={400}
                  />
            <CardContent>
              <CardTitle>{member.name}</CardTitle>
              <p>{member.instrument}</p>
            </CardContent>
          </Card>
        </MemberItem>
      ))}
    </MembersContainer>
  </Container>
);

export default Members;
