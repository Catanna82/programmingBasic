function solution(hour, minutes){
    hour = Number(hour);
    minutes = Number(minutes);
    newMinutes = minutes + 15;
    hour1 = (hour + 1) - 24;
    minutes1 = newMinutes -60; 
    hour2 = hour + 1;
1
    if(hour <= 23 && newMinutes <= 59){

        console.log(`${hour}:${newMinutes}`);
    }
    else if(hour >= 23 && newMinutes > 59 && minutes1 < 10){
        
        console.log(`${hour1}:0${minutes1}`);
    }

    else if(hour1 <= 23 && newMinutes > 59){

        console.log(`${hour2}:${minutes1}`);
    }
    else if(hour <= 23 && 10 > newMinutes > 59){

        console.log(`${hour2}:0${minutes1}`);
    }
    else if(hour <= 23 && newMinutes <10){

        console.log(`${hour}:0${newMinutes}`);

    }           
    else if(hour <= 23 && newMinutes > 59 && minutes1 < 10){
        
        console.log(`${hour1}:0${minutes1}`);
    }
    else if(hour > 23 && newMinutes > 59 && minutes1 > 10){
        
        console.log(`${hour1}:${minutes1}`);
    };

   
};
solution("12", "46")
