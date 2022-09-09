import styled from "styled-components";

const ResponsiveText = styled.p`
  margin-top: 0px;
  font-size: 18px;
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export default ResponsiveText;
