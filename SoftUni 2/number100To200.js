function solve (num) {
    num1 = Number(99);
    num2 = Number(201);
    num = Number (num);
    
    if (num <= num1) {

        console.log ("Less than 100");
    }

    else if (num >= num2) {

        console.log ("Greater than 200");
    }
    else if (num1 <= num <= num2) {

        console.log ("Between 100 and 200");
    }
};
    solve("95")