// ! Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const findFrequentElement = (arr) => {
  const frequencyMap = new Map();
  arr.forEach((element) => {
    if (frequencyMap.has(element)) {
      frequencyMap.set(element, frequencyMap.get(element) + 1);
    } else {
      frequencyMap.set(element, 1);
    }
  });

  let mostFrequentElement;
  let maxFrequency = 0;

  frequencyMap.forEach((frequency, element) => {
    if (frequency > maxFrequency) {
      mostFrequentElement = element;
      maxFrequency = frequency;
    }
  });

  return mostFrequentElement;
};

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findFrequentElement(array);
console.log(mostFrequent);
