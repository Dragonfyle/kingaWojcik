type Breakpoints = {
    [key in keyof typeof SIZE]: `@media(max-width: ${(typeof SIZE)[key]}px)`;
};
type BreakpointsNoMedia = {
    [key in keyof typeof SIZE]: `(max-width: ${(typeof SIZE)[key]}px)`;
};

export const SIZE = Object.freeze({
    XS: 320,
    S: 640,
    M: 900,
    L: 1024,
    XL: 1440,
    XXL: 1920,
});

export const breakpoints: Breakpoints = {
    XXL: `@media(max-width: ${SIZE.XXL}px)`,
    XL: `@media(max-width: ${SIZE.XL}px)`,
    L: `@media(max-width: ${SIZE.L}px)`,
    M: `@media(max-width: ${SIZE.M}px)`,
    S: `@media(max-width: ${SIZE.S}px)`,
    XS: `@media(max-width: ${SIZE.XS}px)`,
};

export const breakpointsNoMedia: BreakpointsNoMedia = {
    XXL: `(max-width: ${SIZE.XXL}px)`,
    XL: `(max-width: ${SIZE.XL}px)`,
    L: `(max-width: ${SIZE.L}px)`,
    M: `(max-width: ${SIZE.M}px)`,
    S: `(max-width: ${SIZE.S}px)`,
    XS: `(max-width: ${SIZE.XS}px)`,
};
