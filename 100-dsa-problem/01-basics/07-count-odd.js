// Problem: Count odd numbers in an array
// Input: [3, 8, 5, 10, 7, 2]
// Output: 3

const numbers = [3, 8, 5, 10, 7, 2];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        count++;
    }
}

console.log(count);