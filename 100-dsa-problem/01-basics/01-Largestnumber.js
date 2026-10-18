const numbers = [3, 6, 7, 1, 9]
let count = numbers[0]
for (i = 1; i <= numbers.length; i++) {
    if (numbers[i] > count) {
        count = numbers[i]
    }
}
// console.log(count);


