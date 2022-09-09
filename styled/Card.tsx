import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  margin: 8px 0px 16px 0px;
  box-shadow: 0px 4px 8px 0px ${({ theme }) => theme.colors.black},
    0px 6px 20px 0px ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
`;

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

export const CardAction = styled.div`
  background-color: inherit;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.colors.darkGrey};
  border-top-width: 1px;
  padding: 16px 24px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
`;

export const CardImage = styled.img({
  display: "block",
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  width: "100%",
});
