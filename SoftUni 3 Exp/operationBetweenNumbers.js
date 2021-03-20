function solution (arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let operator = arg3;
    let result = 0;
     
    switch (operator) {
        case '+':
            result = n1 + n2;         
        if (result % 2 === 0) {            
            console.log(`${n1} ${operator} ${n2} = ${result} - ${"even"}`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - ${"odd"}`);
        }
        break;

        case '-':
            result = n1 - n2; 
            if (result % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${result} - ${"even"}`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - ${"odd"}`);
            }
        break;

        case '*':
            result = n1 * n2;
            if (result % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${result} - ${"even"}`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - ${"odd"}`);
            }   
        break;

        case '/':          
            if (n2 !== 0) { 
                result = n1 / n2;              
                console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            }       
        break;

        case '%':
            if (n2 !== 0) {
                result = n1 % n2;
                console.log(`${n1} ${operator} ${n2} = ${result}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            }
        break;
    }
}

solution ("10",
"0",
"%")


























