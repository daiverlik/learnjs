/* Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью. */

function random(min, max) {
  return Math.round( Math.random() * (max - min) + min );
}

console.log(random(1, 5));