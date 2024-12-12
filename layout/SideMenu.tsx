import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme from "../utils/theme";
import MenuItem from "./MenuItem";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  padding-top: 20px;
`;

const MenuImage = styled.img({
  marginTop: "3vh",
  width: "65vw",
  height: "40vh",
});

const menuItemStyle = {
  color: theme.colors.white,
  margin: 8,
};

interface Props {
  onClose: () => void;
}

const SideMenu: FunctionComponent<Props> = ({ onClose }) => (
  <Wrapper>
    <MenuItem path="/" text="Home" onClick={onClose} style={menuItemStyle} />
    <MenuItem
      path="/members"
      text="Members"
      onClick={onClose}
      style={menuItemStyle}
    />
    <MenuItem
      path="/videos"
      text="Videos"
      onClick={onClose}
      style={menuItemStyle}
    />
    <MenuItem
      path="/albums"
      text="Albums"
      onClick={onClose}
      style={menuItemStyle}
    />
    <MenuItem
      path="/gigs"
      text="Gigs"
      onClick={onClose}
      style={menuItemStyle}
    />
    <MenuItem
      path="/merch"
      text="Merch"
      onClick={onClose}
      style={menuItemStyle}
    />
    <MenuItem
      path="/lyrics"
      text="Lyrics"
      onClick={onClose}
      style={menuItemStyle}
    />
    <MenuItem
      path="/about"
      text="About"
      onClick={onClose}
      style={menuItemStyle}
    />
    <picture>
      <source
        srcSet="https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1571164676/strident/static/sidenav.jpg"
        type="image/webp"
      />
      <source
        srcSet="https://res.cloudinary.com/dqvimfd8b/image/upload/v1571164625/strident/static/sidenav.png"
        type="image/jpeg"
      />
      <MenuImage
        src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1571164625/strident/static/sidenav.png"
        alt=""
      />
    </picture>
  </Wrapper>
);

export default SideMenu;
