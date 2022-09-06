import styled from "styled-components";

export const Masonry = styled.div<{ isMobile: boolean }>(({ isMobile }) => ({
  margin: "auto",
  maxWidth: "1080px",
  columnCount: isMobile ? 1 : 2,
}));

export const MasonryBrick = styled.div({
  display: "inline-block",
  width: "95%",
});
