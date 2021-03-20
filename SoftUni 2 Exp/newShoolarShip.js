function solution(arg1, arg2, arg3){
    income = Number(arg1);
    averageSuccess = Number(arg2);
    minimalSalary = Number(arg3);
    scholarship = Math.floor(minimalSalary *0.35);
    exelent = Math.floor(averageSuccess * 25);
    0.00 < income < 6000.00;
    2.00 <= averageSuccess <= 6.00;
    0.00 <= minimalSalary <= 1000.00;
    
    if( income > minimalSalary && averageSuccess <= 5.50){
        console.log(`You cannot get a scholarship!`);
    };
    if( income < minimalSalary && averageSuccess >= 4.50 && scholarship >exelent){
        
        console.log(`You get a Social scholarship ${scholarship} BGN `); 
    }
            
    else if(averageSuccess >= 5.50 && scholarship < exelent ){
        console.log(`You get a scholarship for excellent results ${exelent} BGN `);
    }          
           
};
solution("300.00", "5.65", "420.00")


