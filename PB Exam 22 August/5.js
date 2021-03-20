function solution (input) {
    let index = 0;
    let days = 1;
    let meters = 5364;
    
    while (index < input.length && input[index] !== 'END' && meters < 8848){
        if (input[index] === 'Yes'){
            days++;
        }
        if (days > 5) {
            break;
        }
        meters += Number(input[index + 1]);
        index += 2;
    }
    if (meters >= 8848){
        console.log(`Goal reached for ${days} days!`)
    } else {
        console.log('Failed!');
        console.log(meters);
    }
};
solution (['Yes',
    535,
    'Yes',
    849,
    'Yes',
    499,
    'Yes',
    400,
    'Yes',
    500
  ]
  
  
  );