import Link from "next/link";
import React, { FunctionComponent, CSSProperties } from "react";

import { COLORS } from "../utils/constants";

const baseLinkStyle = {
  color: COLORS.WHITE,
  margin: "auto",
};

interface MenuItemProps {
  path: string;
  text: string;
  onClick?: () => void;
  style?: CSSProperties;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({
  path,
  text,
  onClick,
  style = {},
}) => (
  <Link
    href={path}
    style={{ ...baseLinkStyle, ...style }}
    // activeStyle={{ fontSize: 16, color: COLORS.RED }}
    onClick={onClick}
  >
    {text}
  </Link>
);

export default MenuItem;
