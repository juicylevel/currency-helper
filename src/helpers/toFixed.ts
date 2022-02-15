const toFixed = (value: number, fixed: number = 2): number | undefined => {
    const regExp = new RegExp(`^-?\\d+(?:\.\\d{0,${fixed || -1}})?`);
    const matched = value?.toString().match(regExp);
    if (matched) {
        return parseFloat(matched[0]);
    }
};

export default toFixed;
