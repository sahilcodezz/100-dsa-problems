
/*
Problem: Count even numbers in an array
Input: [2, 7, 4, 9, 10, 13]
Output: 3
*/

const numbers = [2, 7, 4, 9, 10, 13];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}

console.log(count);
