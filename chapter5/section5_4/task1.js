/*Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива. */

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

replaceMiddleValue(styles, 'Классика');

function replaceMiddleValue(array, newValue) {
  let middleIndex = Math.floor( array.length / 2 );

  array[middleIndex] = newValue;
}

console.log( styles.shift() );

styles.unshift('Рэп', 'Регги');

console.log( styles );