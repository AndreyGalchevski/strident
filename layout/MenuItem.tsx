import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, CSSProperties } from "react";

import theme from "../utils/theme";

const baseLinkStyle = {
  color: theme.colors.white,
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
}) => {
  const router = useRouter();
  return (
    <Link href={path} legacyBehavior>
      <a
        onClick={onClick}
        style={{
          ...baseLinkStyle,
          ...style,
          ...(router.pathname === path && {
            fontSize: 16,
            color: theme.colors.red,
          }),
        }}
      >
        {text}
      </a>
    </Link>
  );
};

export default MenuItem;
