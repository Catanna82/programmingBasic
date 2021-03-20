function solution(income, averageSuccess, minimalSalary) {
    income = Number(income);
    averageSuccess = Number(averageSuccess);
    minimalSalary = Number(minimalSalary);

    let social = 0;
    let excellent = 0;

    // класира ли се за социална ?
    if (income < minimalSalary && averageSuccess > 4.5) {
        social = minimalSalary * 0.35;
    }

    // класира ли се за успех
    if (averageSuccess >= 5.5) {
        excellent = averageSuccess * 25;
    }
    // ---------------------------------------
    if(social === 0 && excellent === 0) {
        console.log(`You cannot get a scholarship!`);
    } else if(social > excellent) {
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`); 
    } else if(excellent >= social) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`);
    }
};

solution("430.00", "5.65", "420.00")
