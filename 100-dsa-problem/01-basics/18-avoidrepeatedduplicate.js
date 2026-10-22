
const numbers = [4, 2, 7, 2, 8, 4, 9];

const duplicate = [];

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            if (!duplicate.includes(numbers[i])) {
                console.log(numbers[i]);
                duplicate.push(numbers[i]);
            }
        }
    }
}
