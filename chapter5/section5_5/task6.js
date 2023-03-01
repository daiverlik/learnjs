/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок */

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

console.log( result );

function Calculator() {
  this.operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  }

  this.calculate = (str) => {
    if ( !isString(str) ) return -1;

    let [value1, operator, value2] = str.split(' ');

    if ( !(isNumber( +value1 ) && isNumber( +value2 )) ) {
      console.log('Значения возле знака операции должны быть числами, разделенными пробелами');

      return -1;
    }

    return this.operations[operator](+value1, +value2);
  }

  this.addMethod = (name, func) => {
    if ( !isString(name) && (typeof func === 'function')) return;

    this.operations[name] = func;
  }
}

function isNumber(value) {
  return ( !Number.isNaN(value) && Number.isFinite(value) );
}

function isString(str) {
  let flag = false;

  if ( (typeof str) != 'string' ) {
    console.log(`"${str}" не является строкой`);

    return flag;
  }

  return flag = true;
}

