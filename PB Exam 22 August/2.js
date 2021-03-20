function solution (arg1, arg2, arg3) {
    let people = Number(arg1);
    let strength = Number(arg2);
    let bloodOfIllidan = Number(arg3);

 let totalStrength = people * strength;

 if (totalStrength < bloodOfIllidan) {
     console.log(`You are not prepared! You need ${bloodOfIllidan - totalStrength} more points.`)
 } else {
     console.log(`Illidan has been slain! You defeated him with ${totalStrength - bloodOfIllidan} points.`)
 }

};
solution (15, 60, 1500);