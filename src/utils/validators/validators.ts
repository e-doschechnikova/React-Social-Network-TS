export const required = (value: string) => {
    if (value) return undefined;
    return "Field is required"
}

export const maxLengthTC = (maxLengt: number) => (value: string) => {
    if (value.length > maxLengt) return `Max length is ${maxLengt} symbols`
    return undefined;
}