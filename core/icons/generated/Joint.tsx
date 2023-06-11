import React from "react";
import type { IconProps } from "../IconProps";

export const IconJoint = React.memo<IconProps>(
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
          viewBox="0 0 55 55"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="27.6994"
            cy="27.7001"
            r="26.3"
            stroke={strokeColor}
            stroke-width={strokeWidth}
          />
          <path
            d="M32.128 52.5998C31.3759 49.6293 30.7742 42.3253 34.3843 36.8735C38.8969 30.0588 32.6922 28.4861 29.8718 31.1072C27.0514 33.7282 23.6669 26.3892 19.1543 31.1072C14.6416 35.8251 25.3591 33.7282 23.6669 52.5998M31.0001 2.7998C30.4358 5.94507 30.3226 13.284 34.3843 17.4777C39.4614 22.7198 33.8202 27.4377 29.8718 24.2924C25.9234 21.1472 19.7185 27.4377 18.0263 21.6714C16.334 15.9051 24.7953 21.1472 22.5389 2.7998"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
        </svg>
      </>
    );
  }
);

IconJoint.displayName = "IconJoint";
