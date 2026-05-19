console.info(`Pig latin translator`);

const args = process.argv.slice(2);

let sentenceInput = args[0];
// split the words in the input sentence
let wordsInput = sentenceInput.split(' ');

//logic to find vowels

const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

function translateWord(word) {
  const first = word[0];
  const second = word[1];

  if (vowels.includes(first)) {
    return word + 'way';
  }
  if (!vowels.includes(first) && !vowels.includes(second)) {
    return word.slice(2) + word.slice(0, 2) + 'ay';
  }
  return word.slice(1) + word[0] + 'ay';
}

//Logging the end result sentece
console.log(wordsInput.map(translateWord).join(' '));
