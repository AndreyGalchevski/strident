import styled from "styled-components";

const HiddenOnDesktop = styled.div`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export default HiddenOnDesktop;
