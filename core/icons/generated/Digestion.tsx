import React from "react";
import type { IconProps } from "../IconProps";

export const IconDigestion = React.memo<IconProps>(
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
          viewBox="0 0 55 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 26.1999C26.9998 25.5999 29.4794 24.7599 31.3994 26.1999C33.7994 27.9999 34.9994 23.1999 38.5994 23.7999C42.1994 24.3999 42.1765 29.1999 47.5994 24.9999M12.2 42.3998C13.6 44.1998 18.32 47.7998 26 47.7998C35.6 47.7998 51.8 40.5998 53 23.7998C54.2 6.99977 37.4 -0.800229 26 8.79977C20.6 12.3999 20 1.59985 18.2 1.59985C16.4 1.59985 12.2 2.79985 12.2 5.19985C12.2 7.59985 15.8 16.5999 23 16.5999C26 16.5999 24.2 28.5999 15.2 31.5999C6.2 34.5999 0.199999 44.1999 2 50.7999C4.39941 54.9999 10.3994 51.9999 9.79941 50.7999C9.19941 49.5999 7.40058 42.3998 12.2 42.3998Z"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
        </svg>
      </>
    );
  }
);

IconDigestion.displayName = "IconDigestion";
