    export const findMostSearchedWords = (allMatches, searchInput) => {

      allMatches = allMatches.filter((match) => {
          if(match.numberOfMatchingChars === searchInput.length) {
              return match
          }
        })
        return allMatches
    }
  
  export const kitesurfingKites = [
    {
      id: 1,
      name: "Airush Lithium V11",
      brand: "Airush Kites",
      model: "Lithium V11"
    },
    {
      id: 2,
      name: "Cabrinha Switchblade",
      brand: "Cabrinha",
      model: "Switchblade"
    },
    {
      id: 3,
      name: "Duotone Rebel",
      brand: "Duotone",
      model: "Rebel"
    },
    {
      id: 4,
      name: "Duotone Vegas",
      brand: "Duotone",
      model: "Vegas"
    },
    {
      id: 5,
      name: "Naish Pivot",
      brand: "Naish Kites",
      model: "Pivot"
    }
  ];
  
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
  
          return matchingResults
    }
  
      const searchForProduct = (searchInput, products, category) => {
          const allResults = findAllMatchingResults(searchInput, products, category)
          const resultsWithHighestMatch = findMostSearchedWords(allResults, searchInput)
          return resultsWithHighestMatch
      }
  
    var inputField = document.getElementById("inputField");
  
    inputField?.addEventListener("input", function(event) {
      var inputText = event.target.value;
      const category = document.getElementById("dropdownChosenCategory").innerHTML
      searchForProduct(inputText, kitesurfingKites, category)  
  });
  
  const setChosenCategory = (category) => {
      document.getElementById("dropdownChosenCategory").innerHTML = category
      closeDropdown()
  }
  
  const expandDropdown = () => {
      const dropdownDisplayChosenAlternative = document.getElementById("dropdownDisplayChosenAlternative")
  
      for (const category in kitesurfingKites[0]) {
          let div = document.createElement("div");
          div.innerHTML = category
          div.addEventListener("click", () => setChosenCategory(category));
          dropdownDisplayChosenAlternative.append(div)
      }
  }
  
  const closeDropdown = () => {
      const dropdownDisplayChosenAlternative = document.getElementById("dropdownDisplayChosenAlternative")
     
      while (dropdownDisplayChosenAlternative.firstChild) {
          dropdownDisplayChosenAlternative.removeChild(dropdownDisplayChosenAlternative.lastChild);
      }
  }
  
