/*В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
 Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date. */

 let date = new Date(2012, 0, 3);

 console.log( getLocalDay(date) );

function getLocalDay(date) {
  let day = date.getDay();

  return day != 0 ? day : 7;
}