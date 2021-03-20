function solution (arg1, arg2, arg3){
let minutesWalking = Number(arg1);
let numberOfWalk = Number (arg2);
let calories = Number(arg3);

let allMinutesWalk = minutesWalking * numberOfWalk;
let allCalories = allMinutesWalk * 5;
let needCaloriesBurned = calories * 0.50;

if (allCalories >= needCaloriesBurned){
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${allCalories}.`)
} else {
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${allCalories}.`)
}

};
solution ("15",
    "2",
    "500"
    )