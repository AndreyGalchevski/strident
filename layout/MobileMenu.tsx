import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Hamburger from "../components/Hamburger";
import Logo from "./Logo";

const Wrapper = styled.div({
  display: "flex",
  height: "100%",
});

const LogoWrapper = styled.div({
  flex: 4,
});

const Divider = styled.div({
  flex: 1,
});

interface Props {
  onHamburgerClick: () => void;
}

const MobileMenu: FunctionComponent<Props> = ({ onHamburgerClick }) => (
  <Wrapper>
    <Hamburger onClick={onHamburgerClick} style={{ flex: 1 }} />
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <Divider />
  </Wrapper>
);

export default MobileMenu;
