const getItemProps = (item, type) => {
    return {
        label: `${item.title || "Untitled"} : ${type.toUpperCase()}`,
    };
};

const fieldValues = {
    labels: {
        LEFT_IMAGE: "Grafika lewa",
        RIGHT_IMAGE: "Grafika prawa",
        IMAGE_WIDTH: "Szerokość grafiki w px",
        IMAGE_HEIGHT: "Wysokość grafiki w px",
        IMAGE_WIDTH_RIGHT: "Szerokość grafiki w px prawy",
        IMAGE_WIDTH_LEFT: "Szerokość grafiki w px lewy",
        IMAGE_HEIGHT_RIGHT: "Wysokość grafiki w px prawy",
        IMAGE_HEIGHT_LEFT: "Wysokość grafiki w px lewy",
    },
    descriptions: {
        TITLE: "Tytuł wpisu w CMSie",
        DESCRIPTION_POSITION: "Położenie opisu",
    },
};

export { getItemProps, fieldValues };
