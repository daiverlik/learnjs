// При помощи цикла for выведите чётные числа от 2 до 10.

let minValue = 2;
let maxValue = 10;

for (let i = minValue; i <= maxValue; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}