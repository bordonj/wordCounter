// Business Logic

function wordCounter(text) {
  //accidentally did not put () after trim
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(' ');
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
};

function numberOfOccurrencesInText(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return 0;
  }
  const wordArray = text.split(' ');
  let wordCount = 0;
  //accidentally put function(word) instead of (element)
  wordArray.forEach(function(element){
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

//UI Logic

$(document).ready(function() {
  $("form#word-counter").submit(function(event) {
    event.preventDefault();
    const passage = $('#text-passage').val();
    const word = $('#word').val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $('#total-count').html(wordCount);
    $('#selected-count').html(occurrencesOfWord);
  });
});