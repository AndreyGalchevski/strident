import { CSSProperties, FunctionComponent } from "react";

import theme from "../../utils/theme";

interface Props {
  width?: number;
  height?: number;
  color?: string;
  style?: CSSProperties;
}

const MenuIcon: FunctionComponent<Props> = ({
  width = 24,
  height = 24,
  color = theme.colors.white,
  style = {},
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    style={style}
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill={color} />
  </svg>
);

export default MenuIcon;
