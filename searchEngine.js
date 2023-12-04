export const findMostSearchedWords = (allMatches, searchInput) => {
      allMatches = allMatches.filter((match) => {
          if(match.numberOfMatchingChars === searchInput.length) {
              return match
          }
        })
        return allMatches
    }
  
   export const findAllMatchingResults = (searchInput, products, category) => {
  
          let numberOfMatchingChars = 0
          let matchingResults = []
          
          for (const product of products) {
  
              for (let i = 0; i < searchInput.length; i++) {
                  const searchInputChar = searchInput[i];
                  if(searchInputChar.toLowerCase() === product[category][i].toLowerCase()) {
                      numberOfMatchingChars++
                  }
              }
              if (numberOfMatchingChars > 0) {
                  matchingResults.push({
                      numberOfMatchingChars: numberOfMatchingChars,
                      matchingProduct: product
                  });
              }
              numberOfMatchingChars = 0
          }
          console.log("matchingres", matchingResults)

          return matchingResults
    }
  
    export const searchForProduct = (searchInput, products, category) => {
          const allResults = findAllMatchingResults(searchInput, products, category)
          const resultsWithHighestMatch = findMostSearchedWords(allResults, searchInput)
          return resultsWithHighestMatch
      }

      
export const closeDropdown = () => {
    const dropdownDisplayChosenAlternative = document.getElementById("dropdownDisplayChosenAlternative")
    dropdownDisplayChosenAlternative.className = ""
   
    while (dropdownDisplayChosenAlternative.firstChild) {
        dropdownDisplayChosenAlternative.removeChild(dropdownDisplayChosenAlternative.lastChild);
    }
}

export const expandDropdown = (kites) => {
    const dropdownDisplayChosenAlternative = document.getElementById("dropdownDisplayChosenAlternative")
    dropdownDisplayChosenAlternative.className = "dropDownFoldOutItems"

    for (const category in kites[0]) {
        let div = document.createElement("div");
        div.className = "dropDownFoldOutItem"
        div.innerHTML = category
        div.addEventListener("click", () => setChosenCategory(category));
        dropdownDisplayChosenAlternative.append(div)
    }
}

export const setChosenCategory = (category) => {
    document.getElementById("dropdownChosenCategory").innerHTML = category
    closeDropdown()
}

export const searchForProductOnInput = (event, kites) => {
    var inputText = event.target.value;
    const category = document.getElementById("dropdownChosenCategory").innerHTML
    const searchResult = searchForProduct(inputText, kites, category)  

    displaySearchResult(searchResult)
}

export const displaySearchResult = (results) => {
  const resultTable = document.getElementById("resultTable")

  if(resultTable.innerHTML !== "") {
    resultTable.innerHTML = ""
  }

  for (const result of results) {
    let resultHtmlElement = document.createElement("div");
    resultHtmlElement.innerHTML = result.matchingProduct.name
    resultTable.appendChild(resultHtmlElement)
  }
}
