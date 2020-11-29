function secondLargestNo(arr) {
  let max = -Infinity, result = -Infinity;

  for (const value of arr) {
    const num = Number(value)

    if (num > max) {
      [result, max] = [max, num] 
    } else if (num < max && num > result) {
      result = num; 
    }
  }

  return result;
}

const arr = ['20','120','111','215','54','78','200'];
console.log(secondLargestNo(arr));