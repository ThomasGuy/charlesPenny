const breakpoints = {
  xs: 360,
  sm: 480,
  md: 668,
  lg: 968,
  xl: 1180,
};

export const mediaQuery = key => style =>
  `@media only screen and (min-width: ${breakpoints[key]}px) { ${style} }`;

export const mediaQueryMax = key => style =>
  `@media only screen and (max-width: ${breakpoints[key]}px) { ${style} }`;
