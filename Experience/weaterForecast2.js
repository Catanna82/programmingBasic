function solution(arg){
    let degreece = Number(arg);

    if (degreece>= 26.00 && degreece <= 35) {
        console.log("Hot");
    }
    else if (degreece >= 20.01 && degreece <= 25.9) {
        console.log("Warm");
    }
    else if (degreece >= 15.00 && degreece <= 20.00) {
        console.log("Mild");
    }
    else if (degreece >= 12.00 && degreece <= 14.9){
        console.log ("Cool");
    }
    else if (degreece >= 5.00 && degreece <= 11.9){
        console.log("Cold");
    }
    else{
        console.log("unknown")
    };


};
solution(0);