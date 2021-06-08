function numberOfOccurrencesInText(text) {
  const wordArray = text.split(" ");
  let wordCount = 0;
  let totalArray = [];
  for (let word of wordArray) {
    wordArray.forEach(function(currentWord) {
      if (currentWord == word) {
        wordCount++;
        totalArray.push(word);
      }  
    }
  );
  return totalArray;
  }
}


function numberOfOccurrencesInText(text) {
  const wordArray = text.split(" ");
  let wordCount = 0;
  let totalArray = [];

  for (let i = 0; i < wordArray.length; i++)
    wordArray.forEach(function(currentWord) {
      if (totalArray.includes(currentWord.toLowerCase())) {
        currentWord.toLowerCase();
      } else if (currentWord.toLowerCase().includes(wordArray[i].toLowerCase())) {
        wordCount++;
        totalArray.push(wordArray[i]);
      } 
    }
  );
  return `${wordCount}, ${totalArray}`;
}


//topWords exercise using objects
function topWords(text) {
  let wordArray = text.split(' ');
  // ['hi', 'hello', 'hello']
  let wordCounter = {};
  
  for (let word of wordArray) {
    let lowerCaseWord = word.toLowerCase();

    if (!wordCounter[lowerCaseWord]) {
      wordCounter[lowerCaseWord] = 1;
    } else if (wordCounter[lowerCaseWord]) {
      wordCounter[lowerCaseWord]++;
    }
  }
  let entries = Object.entries(wordCounter);
  let sortedEntries = entries.sort((a, b) => b[1] - a[1]);
  return `${sortedEntries[0][0]} stated ${sortedEntries[0][1]} times`
}























function numberOfOccurrencesInText(text) {
  const wordArray = text.split(" ");
  let wordCount = 0;
  let totalArray = [];

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].toLowerCase() === wordArray[i].toLowerCase()) {
      wordCount++;
      totalArray.push(wordArray[i]);
    }
  }
  return `${wordCount}, ${totalArray}`;
}