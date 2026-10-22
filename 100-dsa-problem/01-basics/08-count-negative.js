
/*
Problem: Count negative numbers in an array
Input: [4, -2, 7, -5, 0, -1]
Output: 3
*/

const numbers = [4, -2, 7, -5, 0, -1];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        count++;
    }
}

console.log(count);
