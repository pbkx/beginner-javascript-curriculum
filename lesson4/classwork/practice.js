// Problem 1
// Create a list of 4 car brands.
// Print the first and last.
// Then add another brand using push() and print the updated list.

let cars = ["Toyota", "BMW", "Subaru", "Tesla"];
console.log(cars[0]);
console.log(cars[3]);
cars.push("Mercedes");
console.log(cars);

// Problem 2
// Create a list of 5 numbers.
// Print the number at index 2.
// Then insert a new number at index 2 and print the updated list.

let nums = [5, 3, 7, 31, 2];
console.log(nums[2]);
nums.splice(2, 0, 99);
console.log(nums);

// Problem 3
// Create a list of 3 cities.
// Print the length of the list.
// Then remove one city and print the updated list.

let cities = ["Tokyo", "Seattle", "Sydney"];
console.log(cities.length);
cities.splice(0, 1);
console.log("After remove:", cities);

// Problem 4
// Create a list of 6 file extensions.
// Print a random one.
// Then pop one at index 3 and print the updated list.

let extensions = ["pdf", "docx", "pptfx", "xlsx", "jpg", "mp4"];
let rand_index = Math.floor(Math.random() * extensions.length);
console.log(extension[rand_index]);
extensions.splice(3, 1);
console.log(extensions);

// Problem 5
// Create a list of 5 animals.
// Use a for loop to print each animal.

let animals = ["cat", "dog", "tiger", "lion", "panda"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}