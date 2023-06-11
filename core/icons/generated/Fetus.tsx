import React from "react";
import type { IconProps } from "../IconProps";

export const IconFetus = React.memo<IconProps>(
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
          viewBox="0 0 52 52"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25.9992"
            cy="26.0002"
            r="24.8"
            stroke={strokeColor}
            stroke-width={strokeWidth}
          />
          <path
            d="M18.1297 21.8001V25.6001M35.0709 21.8001V25.6001M17 33.8001C19.4 39.8001 27.8 43.4001 36.8 33.8001M24.2 1.40015C21.2 2.00015 16.28 4.28015 20.6 8.60015C26 14.0001 41 6.20015 27.2 5.60015"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
        </svg>
      </>
    );
  }
);

IconFetus.displayName = "IconFetus";
