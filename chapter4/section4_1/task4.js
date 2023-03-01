/* 
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
*/

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}

function multiplyNumeric(obj) {
  if ( isEmpty(obj) ) return;

  for (const key in obj) {
    if ( !(+obj[key]) ) continue;

    obj[key] = obj[key] * 2;
  }
}