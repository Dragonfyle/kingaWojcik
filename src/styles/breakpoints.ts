type Breakpoints = {
  [key in keyof typeof SIZE]: `@media(max-width: ${(typeof SIZE)[key]})`;
};
type BreakpointsNoMedia = {
  [key in keyof typeof SIZE]: `(max-width: ${(typeof SIZE)[key]})`;
};

const SIZE = Object.freeze({
  XS: "320px",
  S: "640px",
  M: "900px",
  L: "1024px",
  XL: "1440px",
  XXL: "1670px",
});

export const breakpoints: Breakpoints = {
  XXL: `@media(max-width: ${SIZE.XXL})`,
  XL: `@media(max-width: ${SIZE.XL})`,
  L: `@media(max-width: ${SIZE.L})`,
  M: `@media(max-width: ${SIZE.M})`,
  S: `@media(max-width: ${SIZE.S})`,
  XS: `@media(max-width: ${SIZE.XS})`,
};

export const breakpointsNoMedia: BreakpointsNoMedia = {
  XXL: `(max-width: ${SIZE.XXL})`,
  XL: `(max-width: ${SIZE.XL})`,
  L: `(max-width: ${SIZE.L})`,
  M: `(max-width: ${SIZE.M})`,
  S: `(max-width: ${SIZE.S})`,
  XS: `(max-width: ${SIZE.XS})`,
};
