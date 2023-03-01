/*Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений. */

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);

function groupById(arr) {
  if ( !isArrayAndNotEmpty(arr) ) return {};

  return arr.reduce( (objectElems, elem) => {
    objectElems[elem.id] = elem;
    
    return objectElems;
  }, {} );
}

function isArrayAndNotEmpty(array) {
  let flag = false;

  if ( !Array.isArray(array) || array.length == 0 ) {
    console.log(`"${array}" не является массивом \nили он имеет размерность равную 0`);

    return flag;
  }

  return flag = true;
}