// ! Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoSum = (sortedArray, target) => {
  for (let left = 0; left < sortedArray.length - 1; left++) {
    for (let right = left + 1; right < sortedArray.length; right++) {
      const sum = sortedArray[left] + sortedArray[right];

      if (sum === target) {
        return [left, right];
      } else if (sum > target) {
        break;
      }
    }
  }
  return [];
};

const inputArr = [1, 3, 6, 8, 11, 15];
const target = 9;
const result = findTwoSum(inputArr, target);
console.log(result);
