/*Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N. */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );

function getAverageAge(users) {
  if ( !isArrayAndNotEmpty(users) ) return 0;

  let sumElems = users.reduce( (sum, elem) => sum += elem.age, 0);

  return sumElems / users.length;
}

function isArrayAndNotEmpty(array) {
  let flag = false;

  if ( !Array.isArray(array) || array.length == 0 ) {
    console.log(`"${array}" не является массивом \nили он имеет размерность равную 0`);

    return flag;
  }

  return flag = true;
}