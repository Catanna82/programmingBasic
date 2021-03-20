function solution (arg){
    let numText = arg + "";
    let sum = 0;

    for(let i = 0; i < numText.length; i++){
        
        let num = Number(numText[i]);
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`)

};
solution("564891");