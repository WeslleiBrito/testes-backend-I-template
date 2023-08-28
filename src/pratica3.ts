
export const pratica3 = (n1: number, n2: number) => {

    if(typeof n1 !== "number" || typeof n2 !== "number"){
        return null
    }

    return {
        sum: n1 + n2,
        mult: n1 * n2
    }
}