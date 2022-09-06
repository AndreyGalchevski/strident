import { FunctionComponent } from "react";
import styled from "styled-components";

import useMediaQuery from "../../hooks/useMediaQuery";

const LeftIcon = styled.img({
  marginRight: 10,
  marginBottom: -4,
});

const RightIcon = styled.img({
  marginLeft: 10,
  marginBottom: -4,
});

const Divider = styled.div({
  paddingTop: "1.5vh",
  paddingBottom: "1.5vh",
});

export interface Props {
  title: string;
}

const Header: FunctionComponent<Props> = ({ title }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div>
      {isMobile ? (
        <h1>
          <LeftIcon
            src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1570908405/strident/icons/20191012_210223__01.png"
            alt=""
          />
          {title}
          <RightIcon
            src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1570903384/strident/icons/20191012_210223.png"
            alt=""
          />
        </h1>
      ) : (
        <Divider> </Divider>
      )}
    </div>
  );
};

export default Header;
