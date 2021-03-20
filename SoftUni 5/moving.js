function solution(input){
    let [w, l, h, ...others] = input;
    w = Number(w);
    l = Number(l);
    h = Number(h);
    
    let freeSpace = w * l * h;
    
    let index = 0;
    while(others[index] !== undefined && others[index] !== "Done") {
        freeSpace -= Number(others[index]) * 1;
        index ++;
    }

    if(freeSpace <= 0) {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
    } else {
        console.log(`${freeSpace} Cubic meters left.`)
    }
};
solution(["10",
"1",
"2",
"4",
"6",
"Done"])
;
