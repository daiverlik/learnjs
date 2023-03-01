/*Напишите функцию sortByAge(users),
 которая принимает массив объектов со свойством age и сортирует их по нему. */

 let vasya = { name: "Вася", age: 25 };
 let petya = { name: "Петя", age: 30 };
 let masha = { name: "Маша", age: 28 };
 
 let arr = [ vasya, petya, masha ];
 
 sortByAge(arr);

 console.log(arr);

function sortByAge(users) {
  if ( !isArrayAndNotEmpty(users) ) return [];

  users.sort( (user1, user2) => user1.age - user2.age );
}

function isArrayAndNotEmpty(array) {
  let flag = false;

  if ( !Array.isArray(array) || array.length == 0 ) {
    console.log(`"${array}" не является массивом \nили он имеет размерность равную 0`);

    return flag;
  }

  return flag = true;
}