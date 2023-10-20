// import { findMostSearchedWords } from "./searchEngine";

const findMostSearchedWords = (allMatches, searchInput) => {
    console.log(allMatches)  
    console.log(searchInput)  

  allMatches = allMatches.filter((match) => {
      if(match.numberOfMatchingChars === searchInput.length) {
          return match
      }
    })
    return allMatches
}

test('find most seached word', () => {
    const allMatchesMocked = [{
        numberOfMatchingChars: 1,
        matchingProduct: "asdf"
    },
]

    const result = findMostSearchedWords(allMatchesMocked, "asdf")

    expect(result).toStrictEqual(["123"])
});