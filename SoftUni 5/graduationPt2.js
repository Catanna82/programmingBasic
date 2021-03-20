function solution(input){
    let index = 0;
    let name = input[index];
    index ++;
    
    let counter = 1;
    let excludedCount = 0;
    let averageGrade = 0;
    let isExcluded = false;

    while(counter <= 12){
        let grade = Number(input[index]);
        index ++;

        if (grade < 4.00){
            excludedCount ++;
            if(excludedCount == 2){
                console.log(`${name} has been excluded at ${counter} grade`);
                isExcluded = true;
                break;
            }
            continue;
        }
        averageGrade += grade;
        counter ++;

    }
    if (!isExcluded){
console.log(`${name} graduated. Average grade: ${((averageGrade/12).toFixed(2))}`)
    }

};
solution(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

;