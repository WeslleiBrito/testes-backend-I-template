import {fixacao} from '../src/fixacao'


describe("Recebe um texto e retorna um arry de strings contento as letras do texto", () => {

    test("Deve retornar null caso o valor recebido não for uma string", () => {

        expect(fixacao(["dev"] as any)).toEqual(null)
    })

    test("Deve retornar um array de strings quando passado um texto", () => {

        expect(fixacao("dev")).toEqual(["d", "e", "v"])
    })
})