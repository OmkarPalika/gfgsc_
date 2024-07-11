export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const truncateString = (string, length) => {
    return string.length > length ? string.substring(0, length) + '...' : string;
};
