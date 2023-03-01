/*Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */
console.log( getSecondsToTomorrow() );

function getSecondsToTomorrow() {
  let currentTime = new Date();
  let tomorrowTime = new Date( currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1);

  return Math.round(( tomorrowTime - currentTime ) / 1000);
}