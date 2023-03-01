/* 
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}

const calcSumValueObject = (obj) => {
  if ( isEmpty(obj) ) return 0;

  let sumNumbers = 0;

  for (const key in obj) {
    if ( !(+obj[key]) ) continue;

    sumNumbers += +obj[key];
  }

  return sumNumbers;
}

let sum = calcSumValueObject(salaries);

console.log(sum);
