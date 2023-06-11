import React from "react";
import type { IconProps } from "../IconProps";

export const IconHair = React.memo<IconProps>(
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
          viewBox="0 0 53 57"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.80078 23.6995H17.4008C19.0008 23.6995 21.8408 24.6595 20.4008 28.4995C18.6008 33.2995 11.4008 47.0995 17.4008 52.4995C23.4008 57.8995 31.8008 56.6995 35.4008 48.8995C39.0008 41.0995 30.6008 23.6995 38.4008 23.6995C44.6408 23.6995 49.8008 23.6995 51.6008 23.6995"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
          <path
            d="M28.7992 50.0993C24.9592 52.0194 21.9992 49.6993 20.9992 48.2994C18.5992 45.2992 19.1992 41.0995 25.1992 27.2995C31.1992 13.4995 41.3992 2.09935 43.1992 1.49935C44.9992 0.89935 40.7992 2.69935 34.7992 15.8994C28.7992 29.0994 30.5992 36.2994 30.5992 38.6994C30.5992 41.0994 33.5992 47.6993 28.7992 50.0993Z"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
        </svg>
      </>
    );
  }
);

IconHair.displayName = "IconHair";
