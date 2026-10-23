const numbers = [5, 3, 8, 3, 2, 5];
let found = false;

for (let i = 0; i < numbers.length && !found; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            console.log(numbers[i]);
            found = true;
            break;
        }
    }
}