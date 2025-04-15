function multiplyArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const result = multiplyArray(numbers);
console.log(result);

  