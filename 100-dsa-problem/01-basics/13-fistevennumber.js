/*
Problem: Find the first even number
Input: [3, 7, 9, 12, 15, 20]
Output: 12
*/

const numbers = [3, 7, 9, 12, 15, 20];
let count = null;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        count = numbers[i];
        break; // First even number mil gaya, loop band kar do
    }
}

console.log(count);
