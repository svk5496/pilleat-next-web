/**
 * dashboard route
 */
export const ROUTE_DASHBOARD = "/[channelName]/dashboard";
export const MAKE_ROUTE_DASHBOARD = (channelName: string) =>
  `/${channelName}/dashboard`;

export const HOME = "/";
export const HEALTH_GOAL = "/healthgoal";
export const NUTRIENT = "/nutrient";
export const PRODUCT_DETAIL = (id: string) => `/product/${id}`;
