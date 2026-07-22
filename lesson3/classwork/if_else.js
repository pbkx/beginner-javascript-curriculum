// if statement: runs only when the condition is true
let age = 17;

if (age >= 18) {
    console.log("You can vote!");
}
console.log("Vote check complete.");

// if/else: choose one of two paths
let temp = 34;

if (temp >= 25) {
    console.log("You can go swimming in the lake.");
} else {
    console.log("It's too cold to swim in the lake.");
}
console.log("Weather check done.");

// if/else if/else: handle multiple specific cases
let score = 94;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}
console.log("Grading complete.");