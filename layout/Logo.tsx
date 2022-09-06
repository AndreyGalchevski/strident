import React, { FunctionComponent } from "react";
import styled from "styled-components";

const LogoImage = styled.img({
  width: "88px",
  height: "56px",
});

const Logo: FunctionComponent = () => (
  <LogoImage
    src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1570799435/strident/app/20191011_160907.png"
    alt=""
  />
);

export default Logo;
