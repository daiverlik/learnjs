/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный. */

function filterRange(arr, a, b) {
  if ( !isArrayAndNotEmpty(arr) ) return [];

  return arr.filter( (value) => value >= a && value <= b);
}

function isArrayAndNotEmpty(array) {
  let flag = false;

  if ( !Array.isArray(array) || array.length == 0 ) {
    console.log(`"${array}" не является массивом \nили он имеет размерность равную 0`);

    return flag;
  }

  return flag = true;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log( filtered );
console.log( arr );
