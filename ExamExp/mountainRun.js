function solution (arg1, arg2, arg3) {
    let record = Number(arg1);
    let distance = Number(arg2);
    let timeForOneMeters = Number(arg3);

    let allDistanceTime = distance * timeForOneMeters;
    let realTime = Math.floor(distance / 50) * 30
    let totalTimeForRecord = allDistanceTime + realTime;

    if (totalTimeForRecord >= record){
        console.log(`No! He was ${(totalTimeForRecord - record).toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes! The new record is ${totalTimeForRecord.toFixed(2)} seconds.`)
    }

}
solution (
    "1377",    
"389",
"3"

)