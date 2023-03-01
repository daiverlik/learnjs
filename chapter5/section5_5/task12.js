/*Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr. */

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) );

function unique(arr) {
  if ( !isArrayAndNotEmpty(arr) ) return [];

  return [...new Set(arr)];
}

function isArrayAndNotEmpty(array) {
  let flag = false;

  if ( !Array.isArray(array) || array.length == 0 ) {
    console.log(`"${array}" не является массивом \nили он имеет размерность равную 0`);

    return flag;
  }

  return flag = true;
}