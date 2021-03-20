function solution(hour, minutes){
    hour = Number(hour);
    minutes = Number(minutes) + 15;
    if (minutes >= 60) {
        minutes -= 60;
        hour++;
    }
    if (hour >= 24) {
        hour -= 24;
    }

    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`);
    } else {
        console.log(`${hour}:${minutes}`);
    }
};

solution
("12", "49")
;
