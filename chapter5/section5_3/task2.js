/* Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

function checkSpam(str) {
  if ( (typeof str) != 'string' ) {
    console.log(`"${str}" не является строкой`);

    return '';
  }

  const arraySpamValues = ['viagra', 'XXX'];
  const strLower = str.toLowerCase();

  let flag = false;
  let rezultNumbSearch = 0;

  for (let i = 0; i < arraySpamValues.length; i++) {
    rezultNumbSearch = strLower.indexOf( `${arraySpamValues[i]}`.toLowerCase() ); 

    if ( rezultNumbSearch != -1 ) {
      flag = true;
      
      break;
    }
  }

  return flag;
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );