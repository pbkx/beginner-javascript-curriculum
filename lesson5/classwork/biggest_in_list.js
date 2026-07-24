let numbers = [7, 43, 4, 15, 21];
console.log(numbers);

let biggest = numbers[0];  // Start by assuming the first item is the biggest
for (let i = 0; i < numbers.length; i++) {  // Go through each item in the array
    if (numbers[i] > biggest) {  // If we find something bigger, update our guess
        biggest = numbers[i];
    }
}

console.log("The biggest item:", biggest);