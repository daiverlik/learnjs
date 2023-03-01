/*Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
Из каждой группы анаграмм должно остаться только одно слово, не важно какое. */

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) )

function aclean(arr = []) {
  if ( !isArrayAndNotEmpty(arr) ) return [];

  let objWords = {};
  let sortedWord = '';

  for (const word of arr) {
    if ( isStringNotEmpty(word) ) {
      sortedWord = word.toLowerCase()
                        .split('')
                        .sort( (a, b) => a.localeCompare(b) )
                        .join('');

      objWords[ sortedWord ] = word;
    }
  }

  return Object.values(objWords);
}

function isArrayAndNotEmpty(array) {
  let flag = false;

  if ( !Array.isArray(array) || array.length == 0 ) {
    console.log(`"${array}" не является массивом \nили он имеет размерность равную 0`);

    return flag;
  }

  return flag = true;
}

function isStringNotEmpty(str) {
  return (typeof str === 'string' && str.length > 0);
}