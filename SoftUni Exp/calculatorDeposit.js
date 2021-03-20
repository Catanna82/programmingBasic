function calculateDeposit(depositAmount,months,yearInterestRate){
    depositAmount = Number (depositAmount);
    months = Number(months);
    yearInterestRate = Number(yearInterestRate);
    let interest = depositAmount * (yearInterestRate/100);
    let interestPerMonth = interest / 12;
    let sum = depositAmount + (months * interestPerMonth);
    
    console.log(sum)
}
calculateDeposit("200","3","5.7")