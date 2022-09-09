import { CSSProperties, FunctionComponent } from "react";

import theme from "../../utils/theme";

interface Props {
  width?: number;
  height?: number;
  color?: string;
  style?: CSSProperties;
}

const EventIcon: FunctionComponent<Props> = ({
  width = 24,
  height = 24,
  color = theme.colors.white,
  style = {},
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    style={style}
  >
    <path
      fill={color}
      d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
    />
  </svg>
);

export default EventIcon;
