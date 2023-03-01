/*Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
}; */

let user = {
  name: "Василий Иванович",
  age: 35
};

let jsonUser = JSON.stringify(user);
let convertJsonUser = JSON.parse(jsonUser);

console.log(convertJsonUser);