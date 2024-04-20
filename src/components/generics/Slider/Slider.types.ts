import { PropsWithChildren } from "react";

interface SliderProps extends PropsWithChildren {}

interface SliderImperativeHandle {
    scrollToNext: () => void;
    scrollToPrevious: () => void;
}

export type { SliderProps, SliderImperativeHandle };
