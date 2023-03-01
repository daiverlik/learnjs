/*Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */


console.log( getSecondsToday() );

function getSecondsToday() {
  let currentDate = new Date();

  return ( currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds() );
}