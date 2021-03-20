function solution(arg1, arg2, arg3){
    let product = arg1;
    let sity = arg2;
    let pieces = Number(arg3);
    let total = pieces;

    switch(sity){

        case 'Sofia':
            if(product === "coffee"){
                total *= 0.50;
            }
            else if(product === "water"){
                total *= 0.80;
            }
            else if(product === "beer"){
                total *= 1.20;
            }
            else if(product === "sweets"){
                total *= 1.45;
            }
            else if(product === "peanuts"){
                total *= 1.60
            };

        break;

        case 'Plovdiv':
            if(product === "coffee"){
                total *= 0.40;
            }
            else if(product === "water"){
                total *= 0.70;
            }
            else if(product === "beer"){
                total *= 1.15;
            }
            else if(product === "sweets"){
                total *= 1.30;
            }
            else if(product === "peanuts"){
                total *= 1.50;
            };

        break;

        case 'Varna':
            if(product === "coffee"){
                total *= 0.45;
            }
            else if(product === "water"){
                total *= 0.70;
            }
            else if(product === "beer"){
                total *=1.10;
            }
            else if(product === "sweets"){
                total *= 1.35;
            }
            else if(product === "peanuts"){
                total *= 1.55;
            };

        break;
    }

console.log(total);
};

solution("beer",
"Sofia",
"6")


;