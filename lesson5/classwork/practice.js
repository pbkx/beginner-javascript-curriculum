// Problem 1
// Count how many times "Alex" appears in the list.

let names = ["Liam", "Alex", "Sophie"];

let counter = 0;
for (let i = 0; i < names.length; i++) {
    let item = names[i];
    if (item === "Alex") {
        counter = counter + 1;
    }
}

// Problem 2
// Search for "elephant" in the list and print if it's found.

let animals = ["zebra", "giraffe", "lion"];

let found = false;
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === found) {
        found = true;
        break;
    }
}

console.log(found);

// Problem 3
// Find and print the sum of all the numbers greater than 25 in the list.

let numbers = [12, 7, 33, 5];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 25) {
        total = total + numbers[i];
    }
}
console.log(total);

// Problem 4
// Find and print the biggest number in the list.

let biggest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    if (item > biggest) {
        biggest = item;
    }
}
console.log(biggest);

// Problem 5
// Count how many even numbers are in the list.

counter = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        counter = counter + 1;
    }
}
console.log(counter);