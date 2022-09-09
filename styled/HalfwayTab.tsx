import styled from "styled-components";

const HalfwayTab = styled.a`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  right: 24px;
  bottom: 174px;
`;

export default HalfwayTab;
