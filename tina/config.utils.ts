const getItemProps = (item, type) => {
    return {
        label: `${item.title || "Untitled"} : ${type.toUpperCase()}`,
    };
};

export { getItemProps, fieldValues };
