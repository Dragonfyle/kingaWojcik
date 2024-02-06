import wspolpracaXXL from "/wspolpraca2560.png";
import dzielenieXXL from "/dzielenie2560.png";
import dzielenieL from "/dzielenie1920.png";
import wspolpracaL from "/wspolpraca1920.png";
import genericM from "/generic1024.png";
import genericS from "/generic640.png";

type ImageSet = (typeof imageSets)[number];
type ActiveImageMap = Map<number, ImageSet>;

const WIDTH_THRESHOLDS = ["(max-width: 640px)", "(max-width: 1024px)", "(max-width: 1920px)"] as const;

const wspolpraca = [genericS, genericM, wspolpracaL, wspolpracaXXL] as const;
const dzielenie = [genericS, genericM, dzielenieL, dzielenieXXL] as const;
const imageSets = [wspolpraca, dzielenie, wspolpraca, dzielenie, wspolpraca] as const;

const activeImageMap: ActiveImageMap = new Map(imageSets.map((set, index) => [index, set]));

export type { ImageSet };

export { imageSets, activeImageMap, wspolpraca, WIDTH_THRESHOLDS };
