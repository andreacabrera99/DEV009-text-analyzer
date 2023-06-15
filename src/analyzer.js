const analyzer = {  
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characterCountExcludingSpaces = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").trim().length;
    return characterCountExcludingSpaces;
  },
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsText = text.trim();
    if (wordsText === ""){
      return 0;
    }
    const wordCount = wordsText.split(/\s+/);
    return wordCount.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordLength = text.split(" ");
    let sumLength = 0;
    for (let i=0; i < wordLength.length; i++){
      sumLength += wordLength[i].length;
    }
    const averageLength = sumLength / wordLength.length;
    const averageWordLengthRound = Math.round(averageLength * 100) / 100;
    return averageWordLengthRound;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const reg = (/\b\d+(\.\d+)?\b/g);
    const numbers = text.match(reg);
    let total = 0;
    if(numbers){
      total = numbers.length;
    }
    return total;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const reg = (/\b\d+(\.\d+)?\b/g);
    const numbers = text.match(reg);
    let sum = 0;
    if(numbers){
      for (let i = 0; i < (numbers.length); i++){
        const digit = numbers[i];
        sum = sum + parseFloat(digit);
      }
    }
    return sum;   
  },
};

export default analyzer;
