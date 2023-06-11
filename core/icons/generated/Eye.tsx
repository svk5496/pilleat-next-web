import React from "react";
import type { IconProps } from "../IconProps";

export const IconEye = React.memo<IconProps>(
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
          fill={fillColor}
          style={style}
          viewBox="0 0 56 29"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 16.2002C5.2 11.2002 16.36 1.2002 27.4 1.2002C38.44 1.2002 50 11.2002 54.4 16.2002"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
          <circle
            cx="27.9992"
            cy="15.0002"
            r="12.8"
            stroke={strokeColor}
            stroke-width={strokeWidth}
          />
          <circle
            cx="30"
            cy="13"
            r="5"
            fill={fillColor}
            stroke={strokeColor}
            stroke-width={strokeWidth}
          />
        </svg>
      </>
    );
  }
);

IconEye.displayName = "IconEye";
