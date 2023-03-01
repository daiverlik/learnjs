/*Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.

Сохраните ваш код в файл extended-clock.js
Не изменяйте класс clock.js. Расширьте его. */

import Clock from './clock';

class ExtendedClock extends Clock{
  constructor({ template, precision = 1000 }) {
    super(template);
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval( () => this.render(), this.precision );
  }
}
