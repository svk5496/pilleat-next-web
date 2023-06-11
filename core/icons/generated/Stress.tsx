import React from "react";
import type { IconProps } from "../IconProps";

export const IconStress = React.memo<IconProps>(
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
            d="M18.1294 15.7998V22.5998M35.0706 15.7998V22.5998M17 36.1998C20.0118 32.7998 28.0682 28.0398 36.2 36.1998"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
        </svg>
      </>
    );
  }
);

IconStress.displayName = "IconStress";
