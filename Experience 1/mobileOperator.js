function solution (arg1, arg2, arg3, arg4) {
    let term = arg1;
    let type = arg2;
    let internet = arg3;
    let month = Number(arg4);
    let tax = 0;
    let totalTax = 0;

    switch (type) {
        case 'Small':
            if (term === 'one'){
                tax += 9.98;
            } else if (term === 'two') {
                tax += 8.58;
            }
            switch (internet){
                case 'yes':
                    if (tax <= 10.00){
                        tax += 5.50;
                    } else if (tax <= 30.00) {
                        tax += 4.35;
                    } else if (tax > 30.00) {
                        tax += 3.85;
                    }

                break;
                case 'no':
                break;
            }
            break;
        case 'Middle':
            if (term === 'one'){
                tax += 18.99;
            } else if (term === 'two') {
                tax += 17.09;
            }
            switch (internet){
                case 'yes':
                    if (tax <= 10.00){
                        tax += 5.50;
                    } else if (tax <= 30.00) {
                        tax += 4.35;
                    } else if (tax > 30.00) {
                        tax += 3.85;
                    }

                break;
                case 'no':
                break;
            }
            break;
        case 'Large':
            if (term === 'one'){
                tax += 25.98;
            } else if (term === 'two') {
                tax += 23.59;
            }
            switch (internet){
                case 'yes':
                    if (tax <= 10.00){
                        tax += 5.50;
                    } else if (tax <= 30.00) {
                        tax += 4.35;
                    } else if (tax > 30.00) {
                        tax += 3.85;
                    }

                break;
                case 'no':
                break;
            }
            break;
        case 'ExtraLarge':
            if (term === 'one'){
                tax += 35.99;
            } else if (term === 'two') {
                tax += 31.79;
            }
            switch (internet){
                case 'yes':
                    if (tax <= 10.00){
                    tax += 5.50;
                    } else if (tax <= 30.00) {
                        tax += 4.35;
                    } else if (tax > 30.00) {
                        tax += 3.85;
                    }

                    break;
                case 'no':
                    break;
            }
                break;
    }

    totalTax = month * tax;
    if (term === 'two'){
        totalTax = totalTax - (totalTax * 3.75) / 100; 
    }

    console.log(`${totalTax.toFixed(2)} lv.`)
};
solution ('two','Small', 'yes', '20');