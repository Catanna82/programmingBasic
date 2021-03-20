function solution (input){
    let  startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let output = "";
    for (let number = startNumber; number <= endNumber; number++) {
        let numberAsString = number + "";
        let oddSum = 0;
        let evenSum = 0;
        
        for (let index = 0; index <numberAsString.length; index++) {

            let digit = Number(numberAsString[index]);
           
            if(index % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }

        }
        if (evenSum === oddSum) {
            output += numberAsString + " ";
        }
    }
    console.log(output);
};
solution 
(["123456",
"124000"])


;