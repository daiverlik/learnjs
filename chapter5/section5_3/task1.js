/*Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася"; */

function ucFirst(str) {
  if ( (typeof str) != 'string' ) {
    console.log(`"${str}" не является строкой`);

    return str;
  }

  return ( str[0].toUpperCase() + str.slice(1, str.length) );
}

console.log( ucFirst('вася') );