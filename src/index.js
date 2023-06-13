import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const el = document.getElementById("reset-button");
const element = document.getElementById("myForm");
el.addEventListener("click", fun);
function fun () {
   element.value=" ";
   document.querySelector("#word-count").innerHTML='0';
   document.querySelector("#character-count").innerHTML='0';
   document.querySelector("#spaces-count").innerHTML='0';
   document.querySelector("#numbers-count").innerHTML='0';
   document.querySelector("#sum-count").innerHTML='0';
   document.querySelector("#average").innerHTML='0';
}

element.addEventListener("keyup", textAnalyzer)
function textAnalyzer () {
   const textArea = document.getElementById("myForm").value;
   const wordCount = analyzer.getWordCount(textArea);
   const characterCount = analyzer.getCharacterCount(textArea);
   const spacesCount = analyzer.getCharacterCountExcludingSpaces(textArea);
   const numberCount = analyzer.getNumberCount(textArea);
   const numberSum = analyzer.getNumberSum(textArea);
   const wordLength = analyzer.getAverageWordLength(textArea);

   document.querySelector("#word-count").innerHTML = wordCount;
   document.querySelector("#character-count").innerHTML = characterCount;
   document.querySelector("#spaces-count").innerHTML = spacesCount;
   document.querySelector("#number-count").innerHTML = numberCount;
   document.querySelector("#sum-count").innerHTML = numberSum;
   document.querySelector("#average").innerHTML = wordLength;
}