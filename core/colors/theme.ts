import {
  white,
  red,
  darkRed,
  black,
  blue,
  darkBlue,
  grayscale100,
  grayscale200,
  grayscale300,
  grayscale400,
  grayscale500,
  grayscale550,
  grayscale600,
  grayscale700,
  grayscale800,
  grayscale900,
  primary100,
  primary200,
  primary300,
  primary400,
  primary500,
  primary600,
  primary700,
  primary800,
  primary900,
  alphaBlack5,
  alphaBlack7,
  alphaBlack10,
  alphaBlack13,
  alphaBlack20,
  alphaBlack27,
  alphaBlack33,
  alphaBlack47,
  alphaBlack54,
  alphaBlack60,
  alphaBlack67,
  alphaWhite5,
  alphaWhite7,
  alphaWhite10,
  alphaWhite13,
  alphaWhite20,
  alphaWhite27,
  alphaWhite33,
  alphaWhite47,
  alphaWhite54,
  alphaWhite60,
  alphaWhite67,
} from "./guide";
import { DefaultTheme } from "./styled";

export const lightTheme: DefaultTheme = {
  white,

  primary: primary500,
  primaryDark: primary700,
  primaryLight: primary300,

  bgColor: white,

  borderColor: grayscale400,
  gray: grayscale550,

  bgGrayLight: grayscale100,
  bgGray: grayscale200,
  bgGrayDark: grayscale300,

  fontColorLight: grayscale550,
  fontColor: grayscale700,
  fontColorDark: grayscale900,

  fontLightGray: "#E9E9E9",
  fontGray: "#8E8E8E",
  fontDarkGray: "#65665B",

  blue,
  blueDark: darkBlue,
  danger: red,
};

export const darkTheme: DefaultTheme = {
  white: "#FFFFFF",
  primary: "#FE9A09",
  primaryDark: "#C47501",
  primaryLight: "#D3E357",

  borderColor: "#FDF8F1",
  gray: "#bfbfbf",
  bgColor: black,

  bgGrayLight: "#F9F9F9",
  bgGray: "#F0F0F0",
  bgGrayDark: "#eaeaea",

  fontColorLight: "#606060",
  fontColor: "#404040",
  fontColorDark: "#202020",

  fontLightGray: "#E9E9E9",
  fontGray: "#8E8E8E",
  fontDarkGray: "#65665B",

  blue: "#2688D4",
  blueDark: "#0663B0",

  danger: "#FF6347",
};

export const theme = {
  lightTheme,
  darkTheme,
};
