import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import MenuItem from "./MenuItem";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  height: 64,
});

const LeftLinks = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  flex: 3,
});

const LogoContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
});

const RightLinks = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  flex: 3,
});

const menuItemStyle = {
  marginRight: 16,
  marginLeft: 16,
};

const DesktopMenu: FunctionComponent = () => (
  <Wrapper>
    <LeftLinks>
      <MenuItem path="/" text="Home" style={menuItemStyle} />
      <MenuItem path="/members" text="Members" style={menuItemStyle} />
      <MenuItem path="/videos" text="Videos" style={menuItemStyle} />
      <MenuItem path="/albums" text="Albums" style={menuItemStyle} />
    </LeftLinks>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <RightLinks>
      <MenuItem path="/gigs" text="Gigs" style={menuItemStyle} />
      <MenuItem path="/merch" text="Merch" style={menuItemStyle} />
      <MenuItem path="/lyrics" text="Lyrics" style={menuItemStyle} />
      <MenuItem path="/about" text="About" style={menuItemStyle} />
    </RightLinks>
  </Wrapper>
);

export default DesktopMenu;
