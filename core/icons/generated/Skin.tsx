import React from "react";
import type { IconProps } from "../IconProps";

export const IconSkin = React.memo<IconProps>(
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
          viewBox="0 0 56 33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.60059 1.7998H22.0006C23.0006 1.7998 25.0006 2.3998 25.0006 4.7998C25.0006 7.1998 27.0006 7.7998 28.0006 7.7998C29.0006 7.7998 31.0006 7.1998 31.0006 4.7998C31.0006 2.3998 33.0006 1.7998 34.0006 1.7998H54.4006M1.60059 14.9998C2.60059 14.9998 4.84059 15.1198 5.80059 15.5998C7.00059 16.1998 7.00059 17.3998 8.80059 17.3998C10.6006 17.3998 11.8006 14.3998 15.4006 14.3998C19.0006 14.3998 19.0006 17.3998 21.4006 17.3998C23.8006 17.3998 25.0006 14.3998 28.0006 14.3998C31.0006 14.3998 31.6006 17.3998 34.6006 17.3998C37.6006 17.3998 37.6006 14.3998 40.6006 14.3998C43.6006 14.3998 43.6006 17.3998 47.2006 17.3998C50.8006 17.3998 50.2006 14.3998 54.4006 14.3998"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
          <circle cx="2.2" cy="31.2" r="1.2" fill={strokeColor} />
          <circle cx="8.2" cy="25.2" r="1.2" fill={strokeColor} />
          <circle cx="15.3992" cy="31.2" r="1.2" fill={strokeColor} />
          <circle cx="21.3992" cy="25.2" r="1.2" fill={strokeColor} />
          <circle cx="28.5994" cy="31.2" r="1.2" fill={strokeColor} />
          <circle cx="34.5994" cy="25.2" r="1.2" fill={strokeColor} />
          <circle cx="41.8006" cy="31.2" r="1.2" fill={strokeColor} />
          <circle cx="47.8006" cy="25.2" r="1.2" fill={strokeColor} />
          <circle cx="53.8006" cy="31.2" r="1.2" fill={strokeColor} />
        </svg>
      </>
    );
  }
);

IconSkin.displayName = "IconSkin";
