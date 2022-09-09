import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import SideMenu from "./SideMenu";
import VisibleOnlyOnDesktop from "../styled/VisibleOnlyOnDesktop";
import HiddenOnDesktop from "../styled/HiddenOnDesktop";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  height: 56px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 64px;
  }
`;

const Navbar: FunctionComponent = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        <HiddenOnDesktop>
          <MobileMenu
            onHamburgerClick={(): void => setIsSideMenuOpen(!isSideMenuOpen)}
          />
        </HiddenOnDesktop>
        <VisibleOnlyOnDesktop>
          <DesktopMenu />
        </VisibleOnlyOnDesktop>
      </Nav>
      {isSideMenuOpen && (
        <SideMenu onClose={(): void => setIsSideMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
