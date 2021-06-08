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
  const wordArray = text.split(" ");
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
let topList;
function topWords(text) {
  // console.log('topWords')
  let wordArray = text.split(' ');
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
  console.log(entries);
  let sortedEntries = entries.sort((a, b) => b[1] - a[1]);
  let topOne = `${sortedEntries[0][0]} - ${sortedEntries[0][1]}x`;
  let topTwo = `${sortedEntries[1][0]} - ${sortedEntries[1][1]}x`;
  let topThree = `${sortedEntries[2][0]} - ${sortedEntries[2][1]}x`;

  return topList = [topOne, topTwo, topThree];

  $('.topWords').append(`<li>${topOne}</li>`)
  $('.topWords').append(`<li>${topTwo}</li>`)
  $('.topWords').append(`<li>${topThree}</li>`)
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
    const top3 = topWords(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    // added the bottom to try to separate logic
    $('.topWords').append(`<li>${topList[0]}</li>`)
    $('.topWords').append(`<li>${topList[1]}</li>`)
    $('.topWords').append(`<li>${topList[2]}</li>`)
  });
});