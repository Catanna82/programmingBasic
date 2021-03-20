function solution (input) {
    let numberBread = input [0];
    let index = 1;
    let chefName = input[index];
    index++;
    let grade = input[index];
    let first = 0;
    let second = 0;
    let winner;

    while (index <= input.length - 2){
    
        while (grade !== 'Stop') {
        grade = Number(input[index]);
        second += grade;
        index++; 
        grade = input [index];
    }   
        console.log(`${chefName} has ${second} points.`);
        
        if (first <= second){
            first = second;
            winner = chefName;            
            console.log(`${winner} is the new number 1!`)
        };
        second = 0;        
        index++;
        chefName = input[index];
        index++;
        grade = input [index];      
       
    }
    console.log(`${winner} won competition with ${first} points!`)
};
solution ([
    '2',         'Chef Angelov',
    '9',         '9',
    '9',         'Stop',
    'Chef Rowe', '10',
    '10',        '10',
    '10',        'Stop'
  ]
  )