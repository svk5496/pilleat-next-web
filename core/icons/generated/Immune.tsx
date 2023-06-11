import React from "react";
import type { IconProps } from "../IconProps";

export const IconImmune = React.memo<IconProps>(
  ({
    size = 24,
    fillColor = "rgba(0,0,0,0)",
    strokeColor = "rgba(0,0,0,0.67)",
    variant = "medium",
    style,
  }) => {
    let strokeWidth = "2";

    if (variant === "light") {
      strokeWidth = "1";
    } else if (variant === "bold") {
      strokeWidth = "4";
    }
    return (
      <>
        <svg
          width={size}
          height={size}
          viewBox="0 0 47 58"
          fill={fillColor}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5 3C19.5 15 7 15.5 1 14.5C1 40.5 16 53 23.5 56C43.9 45.6 43.5 23.5 45 13.5C25.5 16 25.6667 6.83333 23.5 3Z"
            stroke={strokeColor}
            stroke-width={strokeWidth}
          />
          <path
            d="M21 39L12 30.5L15.5 26.5L21 31.5L31 21L35 24.5L21 39Z"
            stroke={strokeColor}
            stroke-width={strokeWidth}
          />
        </svg>
      </>
    );
  }
);

IconImmune.displayName = "IconImmune";
