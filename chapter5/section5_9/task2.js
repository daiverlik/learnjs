/*Напишите функцию count(obj), которая возвращает количество свойств объекта:

Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные». */

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) );

function count(obj) {
  return Object.keys(obj).length;
}