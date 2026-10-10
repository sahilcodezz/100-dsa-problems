const numbers = [12, 5, 8, 20, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for(i = 0;i<= numbers.length;i++){
    if(numbers[i] > largest){
        secondLargest = largest
        largest = numbers[i]
    }
    else if(numbers[i] < largest && numbers[i] >secondLargest){
        secondLargest = numbers[i]
    }
}
console.log(largest);
console.log(secondLargest);

