function solution (){
for(let hour = 0; hour < 24; hour++){
    for (let minutes = 0; minutes < 60; minutes++){
        for (let seconds = 0; seconds < 60; seconds++) {
            let h = hour;
            let m = minutes;
            let s = seconds;
                if (hour < 10) {
                     h = "0" + h;
                }
                if (minutes <10) {
                    m = "0" + m;
                }
                if (seconds < 10) {
                    s = "0" + s;
                }
        console.log(h + ":" + m + ":" + s) 
        }
    }        
}
};
solution ();