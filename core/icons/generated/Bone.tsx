import React from "react";
import type { IconProps } from "../IconProps";

export const IconBone = React.memo<IconProps>(
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
          viewBox="0 0 53 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.389 4.84877C15.4319 8.80826 22.0207 7.70043 26.8206 7.70043C30.4207 7.47741 38.4416 8.06654 43.09 3.61182C48.9005 -1.95659 54.13 4.23053 50.6437 8.56101C47.1574 12.8915 54.13 19.6969 47.7385 21.5529C41.3469 23.4089 46.9207 14.3001 26.8206 14.3001C5.22065 14.3001 8.22695 26.502 2.99742 21.5527C-2.23211 16.6033 5.90268 12.8913 2.99742 9.79796C0.0921587 6.70461 1.83532 -0.100584 9.389 4.84877Z"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
        </svg>
      </>
    );
  }
);

IconBone.displayName = "IconBone";
