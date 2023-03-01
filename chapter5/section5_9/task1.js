/*Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) );

function sumSalaries(salaries) {
  let sumElems = 0;

  if ( Object.keys(salaries) == 0) return sumElems;

  for (const value of Object.values(salaries)) {
    sumElems += value;
  }

  return sumElems;
}