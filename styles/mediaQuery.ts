/** Media Query Config
 *  Mobile : <= 539
 *  Tablet : 540 <= <= 991
 *  Desktop Small : 992 <= <= 1339
 *  Desktop : 1440 이상
 *  Large Desktop
 * */

export const Breakpoint = {
  mobile: 540,
  tablet: 992,
  desktop: 1200,
  desktopSmall: 1440,
  desktopLarge: 1920,
};

const breakpoints: Array<number> = [0, 540, 992, 1440, 1920];

const Breakpoints = {
  mobile: 0,
  tablet: 1,
  desktop_sm: 2,
  desktop: 3,
  desktop_lg: 4,
};

function mq(size: number): string {
  return `@media screen and (min-width: ${breakpoints[size]}px)`;
}

export { mq, Breakpoints };
