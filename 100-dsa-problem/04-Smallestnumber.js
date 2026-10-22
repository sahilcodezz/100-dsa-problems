
/*
Problem: Find the smallest number in an array
Input: [8, 3, 12, 5, 1]
Output: 1
*/

const numbers = [8, 3, 12, 5, 1];

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log(smallest);
