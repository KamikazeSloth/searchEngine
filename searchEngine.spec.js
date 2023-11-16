import { findMostSearchedWords, findAllMatchingResults, kitesurfingKites } from "./searchEngine"

describe("searchEngine", () => {
    test("amount of searched words matching should match the number of matching chars returned", () => {
        const allMatchesMocked = [{
            numberOfMatchingChars: 3
        }]

        const result = findMostSearchedWords(allMatchesMocked, "aaa")
        expect(result).toStrictEqual(allMatchesMocked)
    })

    test("find cabrinha with 1 search character", () => {
        const result = findAllMatchingResults("c", kitesurfingKites, "brand")

        expect(result.length).toBe(1)
        expect(result[0].matchingProduct.brand).toStrictEqual("Cabrinha")
        expect(result[0].numberOfMatchingChars).toStrictEqual(1)
    })

    test("find cabrinha with 1 search character", () => {
        const result = findAllMatchingResults("duotone", kitesurfingKites, "brand")

        expect(result.length).toBe(3)
        expect(result[0].matchingProduct.brand).toStrictEqual("Cabrinha")
        expect(result[0].numberOfMatchingChars).toStrictEqual(1)
        expect(result[1].matchingProduct.brand).toStrictEqual("Duotone")
        expect(result[1].numberOfMatchingChars).toStrictEqual(7)
        expect(result[2].matchingProduct.brand).toStrictEqual("Duotone")
        expect(result[2].numberOfMatchingChars).toStrictEqual(7)
    })
    
    test("find nothing by searching for character that doesnt exist in list of products", () => {
        const result = findAllMatchingResults("z", kitesurfingKites, "brand")
        
        expect(result.length).toBe(0)
        expect(result[0]).toStrictEqual(undefined)
    })
})
