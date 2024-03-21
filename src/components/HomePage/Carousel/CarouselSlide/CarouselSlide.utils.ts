import wspolpracaXXL from "/wspolpraca2560.png";
import dzielenieXXL from "/dzielenie2560.png";
import dzielenieL from "/dzielenie1920.png";
import wspolpracaL from "/wspolpraca1920.png";
import rozwojXXL from "/rozwoj2560.jpg";
import rozwojL from "/rozwoj1920.jpg";
import genericM from "/generic1024.png";
import genericS from "/generic640.png";
import wytrwaloscXXL from "/wytrwalosc2560.jpg";
import wytrwaloscL from "/wytrwalosc1920.jpg";

type ImageSet = (typeof imageSets)[number];
type ActiveImageMap = Map<number, ImageSet>;

const WIDTH_THRESHOLDS = ["(max-width: 640px)", "(max-width: 1024px)", "(max-width: 1920px)"] as const;

const wspolpraca = [genericS, genericM, wspolpracaL, wspolpracaXXL] as const;
const dzielenie = [genericS, genericM, dzielenieL, dzielenieXXL] as const;
const wytrwalosc = [genericS, genericM, wytrwaloscL, wytrwaloscXXL] as const;
const rozwoj = [genericS, genericM, rozwojL, rozwojXXL] as const;
const imageSets = [wspolpraca, dzielenie, rozwoj, wytrwalosc] as const;

const activeImageMap: ActiveImageMap = new Map(imageSets.map((set, index) => [index, set]));

export type { ImageSet };

export { imageSets, activeImageMap, wspolpraca, WIDTH_THRESHOLDS };
