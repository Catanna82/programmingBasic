function solution (input) {
let floor = Number (input[0]);
let roomsOnFloor = Number (input[1]);

for (let i = floor; i >= 1; i--){
    let printline = "";
    for (let j = 0; j < roomsOnFloor; j++){
        if (i === floor){
            printline += `L${i}${j} `;
        } else if (i % 2 === 0) {
            printline += `O${i}${j} `;
        } else if (i % 2 !== 0){
            printline += `A${i}${j} `;
        }
    }
    console.log (printline);
}

};
solution 
(["4", "4"]) ;