import { CSSProperties, FunctionComponent } from "react";

import { COLORS } from "../../utils/constants";

interface Props {
  width?: number;
  height?: number;
  color?: string;
  style?: CSSProperties;
}

const BandcampIcon: FunctionComponent<Props> = ({
  width = 20,
  height = 20,
  color = COLORS.WHITE,
  style = {},
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 448 512"
    style={style}
  >
    <path
      fill={color}
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm48.2 326.1h-181L199.9 178h181l-84.7 156.1z"
    />
  </svg>
);

export default BandcampIcon;
