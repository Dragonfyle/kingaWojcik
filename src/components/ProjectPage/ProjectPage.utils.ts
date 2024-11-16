const widthMap = {
    "30": "feature-30-70",
    "40": "feature-40-60",
    "50": "feature-50-50",
    "60": "feature-60-40",
    "70": "feature-70-30",
};

function getGifDependentProps(isGif: boolean) {
    return isGif ? { controls: false, autoPlay: true, loop: true, muted: true } : {};
}

export { widthMap, getGifDependentProps };
