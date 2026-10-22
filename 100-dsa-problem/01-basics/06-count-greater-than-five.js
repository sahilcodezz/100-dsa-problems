
/*
Problem: Count numbers greater than 5
Input: [2, 7, 4, 9, 10, 3]
Output: 3
*/

const numbers = [2, 7, 4, 9, 10, 3];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        count++;
    }
}

console.log(count);
