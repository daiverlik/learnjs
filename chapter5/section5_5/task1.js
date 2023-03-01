/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву. */

console.log( camelize('my-short-string') );

function camelize(str) {
  if ( !isString(str) ) {
    return str;
  }

  return str.split('-')
            .map( (value, index) => index != 0 ? ucFirst(value) : value )
            .join('');
}

function isString(str) {
  let flag = false;

  if ( (typeof str) != 'string' ) {
    console.log(`"${str}" не является строкой`);

    return flag;
  }

  return flag = true;
}

function ucFirst(str) {
  if ( !isString(str) ) {
    return str;
  }

  return ( str[0].toUpperCase() + str.slice(1, str.length) );
}