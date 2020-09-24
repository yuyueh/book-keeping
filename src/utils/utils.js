export const padLeft = (n, value) => {
    return `${value}`.padStart(n, 0);
};

export const generateRange = (len, startAt) => {
    return new Array(len).fill().map((_, i) => startAt + i);
};
