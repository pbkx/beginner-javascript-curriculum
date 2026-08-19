let has_ticket = "yes";
let age = 14;

if (age >= 13 && has_ticket === "yes") {  // AND: both conditions must be true
    console.log("You can enter the PG-13 movie.");
} else {
    console.log("Sorry, you can't enter.");
}

let has_pass = "no"
let has_coins = "yes";

if (has_pass === "yes" || has_coins === "yes") {  // OR: at least one condition must be true
    console.log("You can ride the bus.");
} else {
    console.log("You can't ride the bus.");
}