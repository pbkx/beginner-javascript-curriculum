let colors = ["red", "green", "blue", "yellow"];  // Create an array
console.log(colors);  // Print the entire array

// Arrays are 0 indexed
// Access items in an array by index
console.log(colors[0]);  // First item
console.log(colors[1]);  // Second item
console.log(colors[2]);  // Third item
console.log(colors[3]);  // Fourth item

// Out-of-range array access returns undefined
console.log(colors[10]);

colors[2] = "purple";  // Change an item at a specific index
console.log("After purple:", colors);

colors.push("orange");  // Adds an item to the end of the array
console.log("After append:", colors);

// Insert an item at a specific index
colors.splice(2, 0, "pink");  // startIndex, deleteCount, itemToAdd
console.log("After insert at index 2:", colors);

// Reemove an item at a specific index
colors.splice(1, 1);  // startIndex, deleteCount
console.log("After removing 'green':", colors);

console.log("Length of the array:", colors.length);  // Get the number of items in the array