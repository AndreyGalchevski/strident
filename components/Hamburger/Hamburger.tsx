import { FunctionComponent, CSSProperties } from "react";
import styled from "styled-components";

import MenuIcon from "../icons/Menu";

const Wrapper = styled.a({
  height: 56,
  width: 46,
});

interface Props {
  onClick: () => void;
  style?: CSSProperties;
}

const Hamburger: FunctionComponent<Props> = ({ onClick, style = {} }) => (
  <Wrapper onClick={onClick} style={style}>
    <MenuIcon style={{ marginTop: 16 }} />
  </Wrapper>
);

export default Hamburger;
