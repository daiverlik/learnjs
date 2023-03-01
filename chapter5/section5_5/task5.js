/*У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию. */

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr );

function copySorted(arr) {
  if ( !isArrayAndNotEmpty(arr) ) return;

  return arr.concat()
            .sort( (value1, value2) => value1.localeCompare(value2));
}

function isArrayAndNotEmpty(array) {
  let flag = false;

  if ( !Array.isArray(array) || array.length == 0 ) {
    console.log(`"${array}" не является массивом \nили он имеет размерность равную 0`);

    return flag;
  }

  return flag = true;
}