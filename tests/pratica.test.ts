import {pratica2} from '../src/pratica2'

describe("Função pratica 2", () => {

    test("Deve retornar true para números pares inteiros", () => {
        expect(pratica2(10)).toBe(true)
        expect(pratica2(11)).toBe(false)
        expect(pratica2("abc" as any)).toBe(null)
        expect(pratica2(["0", 5, {}] as any)).toBe(null)
    })
})