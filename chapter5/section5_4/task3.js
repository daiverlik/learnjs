/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму. */

console.log( getMaxSubSum([1, -2, 3, 4, -9, 6]) );

function getMaxSubSum(arr) {
  if (!arr?.length) {
    console.log('Переданное значение не является массивом или имеет нулевую длину');

    return -1;
  }

  let maxSubSum = 0;
  let tempSum = 0;

  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    
    if (tempSum < 0) {
      tempSum = 0;
      
      continue;
    }

    maxSubSum = Math.max(maxSubSum, tempSum);
  }

  return maxSubSum;
}