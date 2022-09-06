import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

import { COLORS } from "../utils/constants";
import useMediaQuery from "../hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import SideMenu from "./SideMenu";

const Nav = styled.nav({
  backgroundColor: COLORS.BLACK,
});

const Navbar: FunctionComponent = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <Nav style={{ height: isMobile ? 56 : 64 }}>
        {isMobile ? (
          <MobileMenu
            onHamburgerClick={(): void => setIsSideMenuOpen(!isSideMenuOpen)}
          />
        ) : (
          <DesktopMenu />
        )}
      </Nav>
      {isSideMenuOpen && (
        <SideMenu onClose={(): void => setIsSideMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
