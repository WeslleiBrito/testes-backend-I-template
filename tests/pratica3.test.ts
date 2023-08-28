import { pratica3 } from "../src/pratica3"

describe("Testa uma função que recebe dois números e retorna a soma dele e a multiplicação", () => {

    test("Deve retornar null caso os parâmetros não forem de números", () => {
        expect(pratica3("abc" as any, "Wesllei" as any)).toBe(null)
    })

    test("Deve retornar a multiplicação de dois numeros", () => {
        expect(pratica3(3, 5)).toEqual({sum: 8, mult: 15})
    })
})