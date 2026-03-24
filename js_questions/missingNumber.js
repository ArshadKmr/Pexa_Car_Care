// Find first missing number from sequence 1 to n+1
function findMissingNumber(arr) {
  const set = new Set(arr);

  for (let i = 1; i <= arr.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}

// Test cases
const arr1 = [3, 7, 1, 2, 8, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr1)); // 6
console.log(findMissingNumber(arr2)); // 3