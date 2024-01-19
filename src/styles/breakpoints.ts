type BreakpointsObject = {
  [key in keyof typeof SIZE]: `@media(max-width: ${(typeof SIZE)[key]})`;
};

const SIZE = Object.freeze({
  XS: "320px",
  S: "640px",
  M: "900px",
  L: "1024px",
  XL: "1440px",
  XXL: "1670px",
});

export const breakpoints: BreakpointsObject = {
  XXL: `@media(max-width: ${SIZE.XXL})`,
  XL: `@media(max-width: ${SIZE.XL})`,
  L: `@media(max-width: ${SIZE.L})`,
  M: `@media(max-width: ${SIZE.M})`,
  S: `@media(max-width: ${SIZE.S})`,
  XS: `@media(max-width: ${SIZE.XS})`,
};
