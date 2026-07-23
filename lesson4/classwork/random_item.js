let animals = ["cat", "dog", "parrot", "hamster", "rabbit"];

let length = animals.length;

// Generate a random index between 0 and length-1 (in bounds)
let random_index = Math.floor(Math.random() * length); 

let random_animal = animals[random_index];
console.log("Random animal:", random_animal);