import { FunctionComponent } from "react";
import styled from "styled-components";

import HiddenOnDesktop from "../../styled/HiddenOnDesktop";
import VisibleOnlyOnDesktop from "../../styled/VisibleOnlyOnDesktop";

const LeftIcon = styled.img({
  marginRight: 10,
  marginBottom: -4,
});

const RightIcon = styled.img({
  marginLeft: 10,
  marginBottom: -4,
});

export interface Props {
  title: string;
}

const Header: FunctionComponent<Props> = ({ title }) => (
  <div>
    <HiddenOnDesktop>
      <h2>
        <LeftIcon
          src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1570908405/strident/static/20191012_210223__01.png"
          alt=""
        />
        {title}
        <RightIcon
          src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1570903384/strident/static/20191012_210223.png"
          alt=""
        />
      </h2>
    </HiddenOnDesktop>
    <VisibleOnlyOnDesktop>
      <h2> </h2>
    </VisibleOnlyOnDesktop>
  </div>
);

export default Header;
