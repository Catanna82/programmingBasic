function solution (arg1, arg2, arg3) {
    let destination = arg1;
    let date = arg2;
    let nights = Number(arg3);
    let total = nights;
    switch (destination){
        case 'France':
            if (date === "21-23"){
                total *= 30;
            } else if (date === "24-27"){
                total *= 35;
            } else if (date === "28-31"){
                total *= 40;
            }
        break;
        case 'Italy':
            if (date === "21-23"){
                total *= 28;
            } else if (date === "24-27"){
                total *= 32;
            } else if (date === "28-31"){
                total *= 39;
            }
        break;
        case 'Germany':
            if (date === "21-23"){
                total *= 32;
            } else if (date === "24-27"){
                total *= 37;
            } else if (date === "28-31"){
                total *= 43;
            }
        break;
    }
    console.log(`Easter trip to ${destination} : ${total.toFixed(2)} leva.`);
};
solution ("France", "28-31", "8");