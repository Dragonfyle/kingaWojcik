import { SIZE } from "../styles/breakpoints";

const _config = Object.freeze({
  APP: { MAX_MOBILE_WIDTH: SIZE.L },
  CAROUSEL: { INTERVAL: 100, SLIDE_LENGTH_MS: 5000 },
});

const CONFIG = new Proxy(_config, {
  set: () => {
    throw new Error("config is readonly, do not mutate");
  },
});

export { CONFIG };
