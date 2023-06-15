import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const el = document.getElementById("reset-button");
const element = document.querySelector('textarea[name="user-input"]');
el.addEventListener("click", fun);
function fun () {
  element.value='';
  document.querySelector("#character-count").innerHTML='0';
  document.querySelector("#spaces-count").innerHTML='0';
  document.querySelector("#word-count").innerHTML='0';
  document.querySelector("#numbers-count").innerHTML='0';
  document.querySelector("#sum-count").innerHTML='0';
  document.querySelector("#average").innerHTML='0';
}

element.addEventListener("keyup", textAnalyzer)
function textAnalyzer () {
  const textArea = document.querySelector('textarea[name="user-input"]').value;
  const characterCount = analyzer.getCharacterCount(textArea);
  const spacesCount = analyzer.getCharacterCountExcludingSpaces(textArea);
  const wordCount = analyzer.getWordCount(textArea);
  const numberCount = analyzer.getNumberCount(textArea);
  const numberSum = analyzer.getNumberSum(textArea);
  const wordLength = analyzer.getAverageWordLength(textArea);

  document.querySelector("#character-count").innerHTML = characterCount;
  document.querySelector("#spaces-count").innerHTML = spacesCount;
  document.querySelector("#word-count").innerHTML = wordCount;
  document.querySelector("#numbers-count").innerHTML = numberCount;
  document.querySelector("#sum-count").innerHTML = numberSum;
  document.querySelector("#average").innerHTML = wordLength;
}