const numbers = [4, 5, 2, 4, 2, 7, 5];

for (let i = 0; i < numbers.length; i++) {
    let found = false;

    for (let j = 0; j < numbers.length; j++) {
        if (i !== j && numbers[i] === numbers[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        console.log(numbers[i]);
        break;
    }
}