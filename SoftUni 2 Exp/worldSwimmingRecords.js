function solution(record, distance, time){
    record = Number(record);
    distance = Number(distance);
    time = Number(time);
    const swimmingSeconds = distance * time;
    const waterSpeed = Math.floor(distance / 15) * 12.5;
    const totalTime = swimmingSeconds + waterSpeed;
    if (record > totalTime) {
        console.log (`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        const timeNeed = totalTime - record;
        console.log(`No, he failed! He was ${timeNeed.toFixed(2)} seconds slower.`);
    };
};
solution("55555.67",
"3017",
"5.03")
;
