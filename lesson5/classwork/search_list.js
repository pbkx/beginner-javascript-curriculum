let fruit = ["banana", "apple", "mango", "passionfruit"];

// Find if apple is in array and print its index

let found = false;
let index = -1;

for (let i = 0; i < fruit.length; i++) {  // Go through each item in the array
    if (fruit[i] === "apple") {  // If the curent item is apple
        found = true;  // Mark as found
        index = i;  // Save the index
        break;  // Exit the loop after finding
    }
}

if (found === true) {
    console.log("Found apple at", index);
} else {
    console.log("No apples in the array");
}