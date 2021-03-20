function birthdayParty(rent){
    rent= Number(rent)
    let cake=Number(rent * 20 / 100);
    let drinks=Number(cake - (cake * 45 / 100));
    let animation=Number(1 / 3 * rent);
    
    let partyCost= cake + drinks + animation + rent;

    console.log(partyCost)
}
birthdayParty("3720")