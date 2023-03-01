/*Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr. */

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );

function unique(arr) {
  return [...new Set(arr)];
}