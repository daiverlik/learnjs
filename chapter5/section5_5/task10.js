/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

Все последовательности элементов должны иметь одинаковую вероятность. 
Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая. */
let arr = [1, 2, 3];

shuffle(arr)

console.log(arr);

function shuffle(array) {
  if ( !isArrayAndNotEmpty(array) ) return [];

  let temp = 0;
  let randIndex = 0;
  let lengthArray = array.length;

  for (let i = lengthArray - 1; i > 0; i--) {
    randIndex = getRandomIntNumber(i + 1);

    temp = array[randIndex];
    array[randIndex] = array[i];
    array[i] = temp;
  }
}

function isArrayAndNotEmpty(array) {
  let flag = false;

  if ( !Array.isArray(array) || array.length == 0 ) {
    console.log(`"${array}" не является массивом \nили он имеет размерность равную 0`);

    return flag;
  }

  return flag = true;
}

function getRandomIntNumber(maxNumber, minNumber = 0) {
  if ( !(isIntegerNumber(minNumber) && isIntegerNumber(maxNumber)) ) return -1;

  return  Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

function isIntegerNumber (value) {
  return Number.isInteger(value);
}

