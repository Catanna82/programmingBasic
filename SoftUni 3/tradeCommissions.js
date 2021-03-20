function solution(arg1, arg2){
    let sity = arg1;
    let sales= Number(arg2);
    let comissions = sales;
    

    switch(sity){
    case 'Sofia':
    if(comissions>= 0 && comissions <= 500){
        comissions *= 0.05;
        console.log(comissions.toFixed(2));
    }
    else if (comissions > 500 && comissions <= 1000){
        comissions *= 0.07; 
        console.log(comissions.toFixed(2));
    }
    else if ( comissions > 1000 && comissions <= 10000){
        comissions *= 0.08;
        console.log(comissions.toFixed(2));
    }
    else if (comissions> 10000){
        comissions *= 0.12;
        console.log(comissions.toFixed(2));
    }
    else if(comissions < 0){
        console.log("error");
    }
    break;
    case 'Varna':
    if(comissions>= 0 && comissions <= 500){
        comissions *= 0.045;
        console.log(comissions.toFixed(2));
    }
    else if (comissions > 500 && comissions <= 1000){
        comissions *= 0.075; 
        console.log(comissions.toFixed(2));
    }
    else if ( comissions > 1000 && comissions <= 10000){
        comissions *= 0.1;
        console.log(comissions.toFixed(2));
    }
    else if (comissions> 10000){
        comissions *= 0.13;
        console.log(comissions.toFixed(2));
    }
    else if(comissions < 0){
        console.log("error");
    }
    break;
    case 'Plovdiv':
        if(comissions >= 0 && comissions <= 500){
            comissions *= 0.055;
            console.log(comissions.toFixed(2));
        }
        else if (comissions > 500 && comissions <= 1000){
            comissions *= 0.08; 
            console.log(comissions.toFixed(2));
        }
        else if ( comissions > 1000 && comissions <= 10000){
            comissions *= 0.12;
            console.log(comissions.toFixed(2));
        }
        else if (comissions> 10000){
            comissions *= 0.145;
            console.log(comissions.toFixed(2));
        }
        else if (comissions < 0){
            console.log("error")
        }
        break;
    default:
        console.log("error");
    break;
    }
};




solution("Plovdiv",
"-20")


;