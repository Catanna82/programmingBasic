function solution(hour, minutes){
    hour = Number(hour);
    minutes = Number(minutes);
    
    if(hour < 23 && minutes <= 45){
        hour1 = hour + 1;
        minutes1 = (minutes +15 )% 60;
        minutes1 = `0${minutes1}`

      
    }
    else if(hour >= 23 && minutes > 45){
        hour1 = (hour + 1) - 24;
        minutes1 = (minutes + 15) % 60;
        minutes1 < 10;
        minutes1 = `0${minutes1}`

      
    }

    else if(hour <= 23 && 45 > minutes > 10){
        hour1 = hour;
        minutes1 = minutes + 15;
        
    }
    else if(hour <= 23 && minutes <10 && minutes < 45){
        hour1 = hour;
        minutes1 = (minutes + 15) % 60;
        minutes1 = `0${minutes1}`;
       
    }
    else if(hour <= 23 && newMinutes <10){

        
    }           
    else if(hour <= 23 && newMinutes > 59 && minutes1 < 10){
        
       
    }
    else if(hour > 23 && newMinutes > 59 && minutes1 > 10){
        
       
    };

    console.log(`${hour1}:${minutes1}`);
   
};
solution("12", "58")
