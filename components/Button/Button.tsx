import {
    PropsWithChildren,
    FunctionComponent,
    ButtonHTMLAttributes, JSX,
} from "react";
import styled, { keyframes } from "styled-components";

const StyledButton = styled.button<{ isPrimary: boolean }>(
    ({ theme: { colors }, isPrimary }) => ({
        border: "none",
        borderRadius: 2,
        display: "inline-block",
        height: 40,
        padding: "0 16px",
        textTransform: "uppercase",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginRight: "1em",
        marginLeft: "1em",
        backgroundColor: isPrimary ? colors.red : colors.grey,
        color: isPrimary ? colors.white : colors.black,
        transitionDuration: "0.4s",
        "&:hover": {
            color: isPrimary ? colors.red : colors.grey,
            backgroundColor: isPrimary ? colors.white : colors.darkGrey,
        },
        cursor: "pointer",
    })
);

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ButtonSpinner = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 4px solid transparent;
  border-top-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  animation: ${rotate} 1s ease infinite;
  ${StyledButton}:hover & {
    border-top-color: ${(props) => props.theme.colors.red};
  }
`;

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isPrimary?: boolean;
    isLoading?: boolean;
    fullWidth?: boolean;
    icon?: JSX.Element;
}

const Button: FunctionComponent<PropsWithChildren<Props>> = ({
                                                                 isPrimary = true,
                                                                 isLoading = false,
                                                                 fullWidth = false,
                                                                 onClick,
                                                                 style,
                                                                 children,
                                                                 ...rest
                                                             }) => {
    return (
        <StyledButton
            isPrimary={isPrimary}
            type="button"
            onClick={onClick}
            disabled={isLoading}
            style={{ ...style, ...(fullWidth ? { width: "100%" } : {}) }}
            {...rest}
        >
            {isLoading ? <ButtonSpinner /> : children}
        </StyledButton>
    );
};

export default Button;
