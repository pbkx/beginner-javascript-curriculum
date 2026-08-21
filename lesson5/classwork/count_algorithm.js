let animals = ["cat", "dog", "cat", "tiger", "lion"];
console.log(animals);

let counter = 0;
for (let i = 0; i < animals.length; i++) {  // Go through each item in the array
    let item = animals[i];
    if (item === "cat") {  // If the item is "cat", add 1 to the counter
        counter = counter + 1;
    }
}
console.log(counter, "cats");