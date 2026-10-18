/*
Problem: Count numbers less than 10
Input: [12, 5, 8, 20, 3, 15]
Output: 3
*/

const numbers = [12, 5, 8, 20, 3, 15];

let count = 0;
for(let i = 0;i < numbers.length;i++){
    if(numbers[i] < 10){
     count++
    } 
}

console.log(count);