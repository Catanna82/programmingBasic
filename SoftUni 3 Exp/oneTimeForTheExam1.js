function solution (arg1, arg2, arg3, arg4) {
    let hour = Number(arg1);
    let minutes = Number(arg2);
    let hourArrival = Number(arg3);
    let minutesArrival = Number(arg4);

    // let newHour = 0; 
    let newMinutes = 0;
    newHour = Math.abs(hour - hourArrival);
    newMinutes = Math.abs(minutesArrival - minutes);

    if (newHour >= 24){
        newHour -= 24
    }

    if(newMinutes >= 60){
        newMinutes -= 60
    }else if (newMinutes < 10){
        newMinutes ="0" + newMinutes
    } 
    if(hour === hourArrival && minutesArrival === minutes){
        console.log("On time")
    }
    if (hourArrival >= hour && minutesArrival >minutes){
        console.log("Late");
        console.log(`${newHour}:${newMinutes} minutes after the start`)
    } else if (hour > hourArrival && minutesArrival > minutes) {       
        console.log("On time");
        console.log(`${newMinutes} minutes before the start`);
    } else if (hour < hourArrival && minutes !== 30) {        
        console.log("Late");
        console.log(`${newHour}:${newMinutes} hours after the start`)
    } else if (hourArrival < hour && newHour >=1) {       
        console.log("Early");
        console.log(`${newHour}:${newMinutes} hours before the start`);
    }
};

solution 
("11",
"30",
"10",
"55")
