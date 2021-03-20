function solution (input) {
    let index = 1;
    let unsatisfiedGrades = 0;
    let solvedExam = 0;
    let lastProblem = "";
    let totalSumOfGrades = 0;
    let isTired = false;

    let minimumUnsatisfiedGrade = Number(input[0]);
    let exam = input [index];
   
    while (exam !== 'Enough') {

        let grade = Number(input[index + 1]);
                
        if (unsatisfiedGrades === minimumUnsatisfiedGrade) {  
            isTired = true;             
            break;
        }
       
        if (grade<=4){
           unsatisfiedGrades++;
        }

        lastProblem = exam;
        totalSumOfGrades += grade;
        solvedExam ++;
        index += 2;

        exam = input[index];
    }

    if(isTired === true){
       console.log(`You need a break, ${minimumUnsatisfiedGrade} poor grades.`); 

    } else {
        let averageScore = totalSumOfGrades / solvedExam;

        console.log (`Average score: ${averageScore.toFixed(2)}`);
        console.log (`Number of problems: ${solvedExam}`);
        console.log (`Last problem: ${lastProblem}`);
        
    }

}
solution 
(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

;
