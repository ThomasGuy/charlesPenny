const breakpoints = {
  xs: 360,
  sm: 480,
  md: 668,
  lg: 968,
  xl: 1180,
};

export const mediaQueries = key => style =>
  `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
