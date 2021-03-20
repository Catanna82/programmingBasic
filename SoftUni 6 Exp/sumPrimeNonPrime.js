function solution (input) {
    let index = 0;
    let currentInfo = input[index];

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (currentInfo !== "stop") {
        let number = Number(currentInfo);
        let lastDivider = (number - 1);
        let isPrime = true;

        if (number >= 0) {
            for (let divider = 2; divider <= lastDivider; divider++){
                let result = number % divider;

                if (result === 0){
                    isPrime = false;
                    break;
                }
            }    
            if (isPrime === true) {
                primeSum += number;
            } else {
                nonPrimeSum += number;
            }
                  
        } else {
            console.log (`Number is negative.`);
        }
        index++
        currentInfo = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
};
solution 
(["30",
"83",
"33",
"-1",
"20",
"stop"])


;