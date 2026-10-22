
/*
Problem: Find the sum of all numbers in an array
Input: [5, 3, 8, 2]
Output: 18
*/

const numbers = [5, 3, 8, 2];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log(total);
