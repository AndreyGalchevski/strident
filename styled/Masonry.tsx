import styled from "styled-components";

export const Masonry = styled.div`
  margin: auto;
  max-width: 1080px;
  column-count: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    column-count: 2;
  }
`;

export const MasonryBrick = styled.div({
  display: "inline-block",
  width: "95%",
});
