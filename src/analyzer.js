const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsText = text.trim().split(/\s+/);
    return wordsText.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characterCountExcludingSpaces = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").trim().length;
    return characterCountExcludingSpaces;
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
    const reg = /(\d+)/g;
    const numbers = text.match(reg);
    let total = 0;
    if(numbers){
      total = numbers.length;
    }
    return total;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const reg = /(\d+)/g;
    const numbers = text.match(reg);
    let sum = 0;
    if(numbers){
      for (let i = 0; i < (numbers.length); i++){
      const digit = numbers[i];
      sum = sum + parseInt(digit);
      }
    }
  return sum;   
},
};

export default analyzer;
