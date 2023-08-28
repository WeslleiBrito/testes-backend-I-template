

export const fixacao = (texto: string): null | Array<string> => {

    if(typeof texto !== "string"){
        return null
    }

    return texto.split("")
}