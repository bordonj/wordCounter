// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(' ');
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

//function returns the 3 most used words in passage
//topWords exercise using objects
function topWords(text) {
  let wordArray = text.split(' ');
  // ['hi', 'hello', 'hello']
  let wordCounter = {};
  
  for (let word of wordArray) {
    let lowerCaseWord = word.toLowerCase();
​
    if (!wordCounter[lowerCaseWord]) {
      wordCounter[lowerCaseWord] = 1;
    } else if (wordCounter[lowerCaseWord]) {
      wordCounter[lowerCaseWord]++;
    }
  }
  let entries = Object.entries(wordCounter);
  console.log(entries);
  let sortedEntries = entries.sort((a, b) => b[1] - a[1]);
  return `${sortedEntries[0][0]} stated ${sortedEntries[0][1]} times, ${sortedEntries[1][0]} stated ${sortedEntries[1][1]} times, and ${sortedEntries[2][0]} stated ${sortedEntries[2][1]} times`
}

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const top3Words = topWords(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});