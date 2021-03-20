function solution(arg1, arg2, arg3){
    let fuel = Number(arg1);
    let consumption = Number(arg2);
    let laps = Number(arg3);
    for(let lap = 1; lap <= laps; lap++) {
        fuel -= consumption;
        consumption = consumption + 0.1;
        if(fuel <= 0) {
            return console.log(`You are out of fuel in round ${lap}!`);
        }    
    }

    console.log('Congrats! You won the race!')
};

solution("50", "4.3", "30");
