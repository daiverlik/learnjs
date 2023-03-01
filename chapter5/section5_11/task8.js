/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00. */

console.log( formatDate(new Date(new Date - 1)) );
console.log( formatDate(new Date(new Date - 30 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) )

function formatDate(date) {
  let currentDate = new Date();
  let difDates = currentDate - date;

  let msInSec = 1000;
  let passedSec = difDates / msInSec;
  let passedMin = difDates / (60 * msInSec);
  let passedHours = difDates / (3600 * msInSec);

  let arrayValDate = [date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()];
  let lengthValue = 0;

  for (let i = 0; i < arrayValDate.length; i++) {
    arrayValDate[i] = `${arrayValDate[i]}`;
    lengthValue = arrayValDate[i].length;

    if (lengthValue == 1 ) {
      arrayValDate[i] = `0${arrayValDate[i]}`
    }
  }

  if ( passedSec < 1 ) {
    console.log('прямо сейчас');
  } else if ( passedMin < 1 ) {
    console.log(`${ Math.round(passedSec) } сек. назад`);
  } else if ( passedHours < 1) {
    console.log(`${ Math.round(passedMin) } мин. назад`);
  } else {
    console.log(`${arrayValDate[0]}.${arrayValDate[1]}.${arrayValDate[2]} ${arrayValDate[3]}:${arrayValDate[4]}`);
  }
}