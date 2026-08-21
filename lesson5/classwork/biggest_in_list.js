let nums = [7, 43, 4, 15, 21];
console.log(nums);

let biggest = nums[0];  // Start by assuming the first item is the biggest
for (let i = 0; i < nums.length; i++) {  // Go through each item in the array
    if (nums[i] > biggest) {  // If we find something bigger, update our guess
        biggest = nums[i];
    }
}

console.log("The biggest item:", biggest);