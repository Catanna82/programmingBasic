function solution (arg1, arg2, arg3, arg4) {
    let hour = Number(arg1);
    let minutes = Number(arg2);
    let hourArrival = Number(arg3);
    let minutesArrival = Number(arg4);

    let newMinutes = 0; // + early, - late
    newMinutes = (hour - hourArrival) * 60 + (minutes - minutesArrival);

    let formatTime;
    if (Math.abs(newMinutes) < 60) {
        formatTime = `${Math.abs(newMinutes)} minutes`
    } else {
        const formatHour = Math.floor(Math.abs(newMinutes)/60);
        const formatMinutes = `0${Math.abs(newMinutes) - formatHour * 60}`.slice(-2);
        formatTime = `${formatHour}:${formatMinutes} hours`;
    }

    if (newMinutes < 0) {
        console.log("Late");
        console.log(`${formatTime} after the start`);
    } else if (newMinutes >= 0 && newMinutes <= 30) {
        console.log("On time");
        if (newMinutes !== 0) {
            console.log(`${formatTime} before the start`);
        }
    } else {
        console.log("Early");
        console.log(`${formatTime} before the start`);
    }
};

solution 
("9",
"00",
"10",
"30")
