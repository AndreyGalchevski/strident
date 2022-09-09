import styled from "styled-components";

const VisibleOnlyOnDesktop = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;

export default VisibleOnlyOnDesktop;
