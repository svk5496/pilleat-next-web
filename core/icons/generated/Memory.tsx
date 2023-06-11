import React from "react";
import type { IconProps } from "../IconProps";

export const IconMemory = React.memo<IconProps>(
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
          viewBox="0 0 48 59"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.1814 56.0711C38.4871 52.6349 34.715 43.337 41.1814 33.6349C49.2645 21.5073 49.5878 1.7998 26.9552 1.7998C4.32254 1.7998 5.29251 16.6562 7.55577 20.5977C9.81904 24.5392 0.119083 30.603 2.05902 32.119C3.99897 33.6349 7.55556 32.4221 8.52553 41.5179C9.4955 50.6136 11.4354 47.2785 16.9319 49.0977C21.3291 50.553 21.5662 56.1721 21.1351 58.7998"
            stroke={strokeColor}
            stroke-width={strokeWidth}
          />
          <path
            d="M24.6241 20.607C24.7966 21.5367 25.3193 22.8848 26.3252 23.8802M33.1299 18.8885C34.2114 20.1995 35.0179 21.9273 34.1505 23.277M29.3873 16.4826C30.467 15.7815 32.5956 15.1121 34.7031 16.1389M37.5529 18.8885C36.6819 17.4808 35.6948 16.6221 34.7031 16.1389M18.8401 19.5759C18.9414 18.7064 18.8844 17.4897 18.427 16.4826M26.3252 23.8802C27.3026 24.8474 28.7362 25.4815 30.7482 25.075C32.6071 24.6995 33.6535 24.0503 34.1505 23.277M26.3252 23.8802C21.4258 26.4988 19.0669 24.1639 18.4998 22.6691C17.5926 23.0128 15.2337 23.4252 13.0562 22.3254C10.4625 21.0154 9.41354 16.2723 13.7366 14.9364M13.7366 14.9364C13.9502 14.8704 14.1769 14.8127 14.4171 14.7641C16.6771 14.3076 17.8598 15.234 18.427 16.4826M13.7366 14.9364C13.0561 12.9313 12.7159 8.85256 16.7987 8.5776C17.8613 8.50604 18.7626 8.66574 19.5205 8.96945M22.9229 13.0456C22.6712 11.8592 21.6748 9.83266 19.5205 8.96945M18.427 16.4826C19.1317 16.9409 20.8815 17.5137 22.2424 16.1389M29.3873 20.607C27.7996 20.3778 24.6241 19.1634 24.6241 16.1389C24.6241 13.1144 26.6654 12.3583 27.6861 12.3583M19.5205 8.96945C19.5205 7.69318 20.7454 5.34687 25.6447 6.17173C27.2796 6.44699 28.3791 7.08712 29.0973 7.89032M30.0677 13.0456C30.4455 11.748 30.5313 9.49407 29.0973 7.89032M29.0973 7.89032C29.9878 6.9738 32.6535 5.69067 36.1919 7.89032C38.265 9.17908 38.9365 10.8453 38.6576 12.3583M34.7031 16.1389C36.8043 15.591 38.3415 14.0731 38.6576 12.3583M38.6576 12.3583C40.5576 12.9311 44.0852 15.1766 42.9965 19.5759C41.6356 25.075 37.5527 24.2286 34.1505 23.277"
            stroke={strokeColor}
            stroke-width={strokeWidth}
            stroke-linecap="round"
          />
        </svg>
      </>
    );
  }
);

IconMemory.displayName = "IconMemory";
