let numbers = [5, 9, 12, 3, 7];

let length = numbers.length;

// Generate a random index between 0 and length-1 (in bounds)
let random_index = Math.floor(Math.random() * length);
let random_number = numbers[random_index];
console.log(random_number);