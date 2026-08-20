let colors = ["red", "green", "blue", "yellow"];

console.log(colors);  // Print the entire array

// Arays are 0 indexed
console.log("First color:", colors[0]);  // Access items in an array by index
console.log("Second color:", colors[1]);

console.log(colors[10]);  // Out-of-range array access returns undefined

colors[2] = "purple";  // Change an item in your array
console.log(colors)

colors.push("orange");  // Adds an item to the end of the array
console.log(colors);

colors.splice(2, 0, "aqua");  // Insert an item at a specific index (in this case 2)
console.log(colors);

colors.splice(0, 1);  // Remove item at index 0
console.log(colors);

let index_of_aqua = colors.indexOf("aqua");  // Find the index of an item
console.log(index_of_aqua);

colors.sort();  // Sort the array in alphabetical order
console.log(colors);

colors.reverse();  // Reverse the order of the array
console.log(colors);

console.log(colors.length);  // Get the number of items in the array