
/*
Problem: Count occurrences of a target number
Input: [2, 5, 2, 8, 2, 9]
Target: 2
Output: 3
*/

const numbers = [2, 5, 2, 8, 2, 9];

const target = 2;

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        count++;
    }
}

console.log(count);
