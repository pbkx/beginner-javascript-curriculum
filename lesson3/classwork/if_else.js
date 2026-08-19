// if statement: runs only when the condition is true

let age = 17;
if (age >= 18) {
    console.log("You can vote!");
}

// if/else: choose one of two paths
let temp = 12;

if (temp < 10) {
    console.log("It's cold, wear a jacket.");
} else {
    console.log("No jacket needed.");
}

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