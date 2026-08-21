// Problem 1
// Count how many times "Alex" appears in the list.

let names = ["Liam", "Alex", "Sophie"];

let counter = 0;
for (let i = 0; i < names.length; i++) {
    if (names[i] === "Alex") {
        counter = counter+1;
    }
}
console.log(counter);

// Problem 2
// Search for "elephant" in the list and print if it's found.

let animals = ["zebra", "giraffe", "lion", "tiger"];

let found = false;
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "elephant") {
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
    let item = numbers[i];
    if (item > 25) {
        total = total + item;
    }
}
console.log(total);

// Problem 4
// Find and print the biggest number in the list.

let nums = [7, 43, 4, 15, 21];
console.log(nums);

let biggest = nums[0];  // Start by assuming the first item is the biggest
for (let i = 0; i < nums.length; i++) {  // Go through each item in the array
    if (nums[i] > biggest) {  // If we find something bigger, update our guess
        biggest = nums[i];
    }
}

// Problem 5
// Count how many even numbers are in the list.

numbers = [4, 9, 12, 15, 22, 31];
counter = 0;
for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    if (item % 2 == 0) {
        counter = counter + 1;
    }
}
console.log(counter);