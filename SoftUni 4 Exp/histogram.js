function solution (input){
    let numbers = Number(input[0]);
    let index = 1;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0; 
    let p5 = 0;
    let nextNumber = Number(input[index]);
   
    for (i = 0; i < numbers; i++){
        
        if (nextNumber < 200){
            p1 +=1;
        } else if (nextNumber <= 399){
            p2 +=1;
        } else if (nextNumber <= 599){
            p3 += 1;
        } else if (nextNumber <= 799){
            p4 += 1;
        } else if(nextNumber >= 800) {
            p5 +=1;
        } 

        index++;
        nextNumber = Number(input[index]);
    }

    let p1Total = p1 / numbers * 100;
    let p2Toral = p2 / numbers * 100;
    let p3Total = p3 / numbers * 100;
    let p4Total = p4 / numbers * 100;
    let p5Total = p5 / numbers * 100;

    console.log(p1Total.toFixed(2) + '%');
    console.log(p2Toral.toFixed(2) + '%');
    console.log(p3Total.toFixed(2) + '%');
    console.log(p4Total.toFixed(2) + '%');
    console.log(p5Total.toFixed(2) + '%');

};
solution (["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])


