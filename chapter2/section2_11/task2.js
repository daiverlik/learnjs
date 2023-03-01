/* Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора. */

let age = 13;
let minValue = 14;
let maxValue = 90;

if ( !(age >= minValue && age <= maxValue) ) {
  console.log(`Число ${age} не находится в диапазоне от ${minValue} до ${maxValue}`);
}

if (age < minValue || age > maxValue) {
  console.log(`Число ${age} не находится в диапазоне от ${minValue} до ${maxValue}`);
}