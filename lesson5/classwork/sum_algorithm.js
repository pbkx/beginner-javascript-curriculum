let numbers = [5, 5, 6, 2, 7, 1, 3];
console.log(numbers);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {  // Go through each index in the array
    let item = numbers[i];  // Get the number at this index
    sum = sum + item;  // Add it to the running total
}
console.log("The sum is:", sum);