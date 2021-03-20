function seconds (time1, time2, time3){

    time1 = Number(time1);
    time2 = Number(time2);
    time3 = Number(time3);

    totalTime = time1 + time2 + time3;
    let minutes = Math.floor(totalTime / 60);
    let secondsTime = totalTime % 60;

    if (secondsTime < 10){
        console.log(`${minutes}:0${secondsTime}`);
    }
    else {
        console.log(`${minutes}:${secondsTime}`);
    }
};
seconds("22", "7", "34")