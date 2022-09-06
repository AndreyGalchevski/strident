import styled from "styled-components";

import { COLORS } from "../utils/constants";

export const Card = styled.div({
  position: "relative",
  marginTop: 8,
  marginRight: 0,
  marginBottom: 16,
  marginLeft: 0,
  boxShadow: `0 4px 8px 0 ${COLORS.BLACK}, 0 6px 20px 0 ${COLORS.BLACK}`,
  backgroundColor: COLORS.BLACK,
  color: COLORS.WHITE,
  borderRadius: 30,
});

export const CardContent = styled.div({
  padding: 24,
});

export const CardTitle = styled.p({
  fontSize: 20,
  lineHeight: 2,
  marginTop: 0,
  marginBottom: 8,
  paddingTop: 8,
});

export const CardAction = styled.div({
  backgroundColor: "inherit",
  borderTopStyle: `solid`,
  borderTopColor: COLORS.DARK_GREY,
  borderTopWidth: 1,
  paddingTop: 16,
  paddingBottom: 16,
  paddingRight: 24,
  paddingLeft: 24,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: "inherit",
  borderBottomRightRadius: "inherit",
});

export const CardImage = styled.img({
  display: "block",
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  width: "100%",
});
