import React from "react";
import type { IconProps } from "../IconProps";

export const IconFitness = React.memo<IconProps>(
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
          viewBox="0 0 51 52"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.4539 9.18356C32.0001 11.0155 27.3289 12.1381 24.8368 10.3536M24.8368 10.3536C24.1111 9.83392 23.5702 9.06777 23.372 8.00084C22.6688 4.21613 30.8914 1.89012 35.0906 1.2002L43.2937 7.40948C43.6843 9.5778 44.8172 15.8659 46.2234 23.6719C50.9109 40.5257 50.032 44.0738 49.739 46.735C49.446 49.3961 47.6882 49.1004 38.0203 50.5788C28.3524 52.0572 21.0282 49.1004 13.1181 49.9874C6.79001 50.6971 2.66894 49.6918 1.39941 49.1004V27.8114C5.20799 26.333 14.1728 25.2094 19.5634 32.5423C24.2135 31.8013 32.9528 32.6285 36.387 40.23M24.8368 10.3536L23.9579 13.3231L29.8172 16.5756L34.7977 15.7378M38.6062 15.0972L34.7977 15.7378M37.7273 45.5522C37.5345 43.4886 37.0637 41.7278 36.387 40.23M36.387 40.23C35.159 37.6674 33.4398 30.236 36.387 21.0108L34.7977 15.7378M10.4814 47.3263C10.4814 46.4709 11.1353 44.1307 13.704 41.4194M18.0985 36.3862C17.9032 36.7804 16.8095 38.2785 13.997 41.117C13.8967 41.2183 13.7991 41.3191 13.704 41.4194M13.704 41.4194C16.7314 43.9797 24.8368 47.9177 33.0399 43.1868M46.2234 44.6652C46.907 43.9753 47.3953 39.9935 43.8797 29.5855"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
        </svg>
      </>
    );
  }
);

IconFitness.displayName = "IconFitness";
