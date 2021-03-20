function solution(arg){
    number = Number(arg);
    let isValid = false;

    if(number >= 100 && number <=200 || number === 0){
        
        isValid = true;
       
    };
    if (!isValid){
        console.log("invalid")
    };
  
   
};

solution("1")