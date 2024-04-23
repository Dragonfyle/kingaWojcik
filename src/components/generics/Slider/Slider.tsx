import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { useDeviceContext } from "$contexts/DeviceContext";
import Flexbox from "$generics/Flexbox/";

import ItemIndicator from "./ItemIndicator/ItemIndicator";
import { SliderImperativeHandle, SliderProps } from "./Slider.types";
import * as P from "./Slider.parts";

const Slider = forwardRef<SliderImperativeHandle, SliderProps>(({ children }: SliderProps, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState<number | undefined>();
    const isScrolling = useRef(false);
    const lastScrollLeft = useRef<number | undefined>(0);
    const { isPhone } = useDeviceContext();
    const [activeItem, setActiveItem] = useState(0);

    function handleRefLoad() {
        if (contentRef.current) {
            setItemWidth(contentRef.current.firstElementChild?.clientWidth);
        }
    }

    function onScrollEnd(handleScrollEnd: () => void) {
        const scrollObserver = setInterval(() => {
            if (contentRef.current?.scrollLeft === lastScrollLeft.current) {
                handleScrollEnd();
                clearInterval(scrollObserver);
            } else {
                lastScrollLeft.current = contentRef.current?.scrollLeft;
            }
        }, 100);
    }

    function scrollEndHandler() {
        isScrolling.current = false;
    }

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
        }
    }

    useImperativeHandle(ref, () => {
        return {
            scrollToNext() {
                if (!itemWidth || isScrolling.current) return;

                contentRef.current?.scrollBy({ left: itemWidth, behavior: "smooth" });
                isScrolling.current = true;
                onScrollEnd(scrollEndHandler);
            },
            scrollToPrevious() {
                if (!itemWidth || isScrolling.current) return;

                contentRef.current?.scrollBy({ left: -itemWidth, behavior: "smooth" });
                isScrolling.current = true;
                onScrollEnd(scrollEndHandler);
            },
        };
    });

    return (
        <P.SliderWrapper>
            <P.ContentWrapper ref={contentRef} onLoad={handleRefLoad} onScroll={updateActiveItem}>
                {children}
            </P.ContentWrapper>
            <Flexbox $justify="center" $colGap="15px" $padding="0 31px 0 0">
                {isPhone && renderIndicatorDots()}
            </Flexbox>
        </P.SliderWrapper>
    );
});

export default Slider;
