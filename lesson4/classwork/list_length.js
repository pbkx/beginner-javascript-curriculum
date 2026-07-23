let fruits = ["apple", "banana", "cherry", "date"];

let length = fruits.length;  // Get the number of items in the array (array length
console.log("Number of fruits:", length);

let last_fruit = fruits[length - 1];  // Use length to access the last item
console.log("Last fruit:", last_fruit);

// Out-of-range array access returns undefined
console.log(fruits[length]);