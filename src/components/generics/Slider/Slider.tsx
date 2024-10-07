import { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";

import { useDeviceContext } from "$contexts/DeviceContext";

import ItemIndicator from "./ItemIndicator/ItemIndicator";
import { SliderImperativeHandle, SliderProps } from "./Slider.types";

const Slider = forwardRef<SliderImperativeHandle, SliderProps>(function Slider({ children }: SliderProps, ref) {
    const [itemWidth, setItemWidth] = useState<number | undefined>();
    const [activeItem, setActiveItem] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const isFirstIndex = useRef(true);
    const isLastIndex = useRef(false);

    const { isPhone } = useDeviceContext();

    function renderIndicatorDots() {
        const sliderItems = contentRef.current?.children;

        if (sliderItems && itemWidth) {
            return [...sliderItems].map((item, idx) => (
                <ItemIndicator key={item.lastChild?.textContent} isActive={activeItem === idx} />
            ));
        }
    }

    function interpolateActiveIndex(scrollLeft: number) {
        return Math.round(scrollLeft / window.innerWidth);
    }

    function updateActiveItem() {
        if (contentRef.current && itemWidth) {
            setActiveItem(interpolateActiveIndex(contentRef.current?.scrollLeft));
            isFirstIndex.current = contentRef.current?.scrollLeft === 0;
            isLastIndex.current =
                contentRef.current?.scrollLeft === contentRef.current?.scrollWidth - window.innerWidth;
        }
    }

    useImperativeHandle(ref, () => {
        return {
            scrollToNext() {
                if (!itemWidth) return;

                contentRef.current?.scrollBy({ left: itemWidth, behavior: "smooth" });
            },
            scrollToPrevious() {
                if (!itemWidth) return;

                contentRef.current?.scrollBy({ left: -itemWidth, behavior: "smooth" });
            },
        };
    });

    useLayoutEffect(() => {
        if (contentRef.current) {
            setItemWidth(contentRef.current.firstElementChild?.clientWidth);
        }
    }, []);

    return (
        <div className="flex flex-col gap-3">
            <div
                className="mt-12 flex snap-x snap-mandatory flex-nowrap gap-x-12 overflow-x-auto scrollbar-none l:mt-8 l:pr-[300px]"
                ref={contentRef}
                onScroll={updateActiveItem}>
                {children}
            </div>

            {isPhone && <div className="flex justify-center gap-x-4 pt-8">{renderIndicatorDots()}</div>}
        </div>
    );
});

export default Slider;
