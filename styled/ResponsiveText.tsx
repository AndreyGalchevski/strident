import styled from "styled-components";

const ResponsiveText = styled.p`
  margin-top: 0;
  font-size: 18;
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    font-size: 24;
  }
`;

export default ResponsiveText;
