/*
Problem: Count zeros in an array
Input: [0, 4, 0, -2, 7, 0, 5]
Output: 3
*/

const numbers = [0, 4, 0, -2, 7, 0, 5];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
        count++;
    }
}

console.log(count); // Expected output: 3