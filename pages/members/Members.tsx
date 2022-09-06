import { FunctionComponent } from "react";
import styled from "styled-components";

import useMediaQuery from "../../hooks/useMediaQuery";
import Container from "../../styled/Container";
import { Card, CardTitle, CardContent, CardImage } from "../../styled/Card";
import Header from "../../components/Header";
import members from "../../data/members";

const MembersContainer = styled.div<{ isMobile: boolean }>(({ isMobile }) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  WebkitFlexDirection: isMobile ? "column" : "row",
}));

const MemberItem = styled.div({
  paddingRight: "2vh",
  paddingLeft: "2vh",
});

const Members: FunctionComponent = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <Container>
      <Header title="Members" />
      <MembersContainer isMobile={isMobile}>
        {members.map((member) => (
          <MemberItem key={member.name}>
            <Card>
              <div>
                <picture>
                  <source srcSet={member.imageNG} type="image/webp" />
                  <source srcSet={member.image} type="image/jpeg" />
                  <CardImage src={member.image} alt="" />
                </picture>
              </div>
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
};

export default Members;
