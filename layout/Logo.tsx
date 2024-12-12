import styled from "styled-components";

const LogoImage = styled.img({
  width: "88px",
  height: "54px",
});

const Logo = () => (
  <LogoImage
    src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1570799435/strident/static/20191011_160907.png"
    alt=""
  />
);

export default Logo;
