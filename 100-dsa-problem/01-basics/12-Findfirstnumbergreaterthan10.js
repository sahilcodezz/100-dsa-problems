/*
Problem: Find the first number greater than 10
Input: [3, 7, 12, 15, 20]
Output: 12
*/

const numbers = [3, 7, 12, 15, 20];

for (i = 0;i<numbers.length;i++){
    if(numbers[i] > 10){
       console.log(numbers[i])
       break
    }
}

