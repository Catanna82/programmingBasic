function solution(arg1, arg2){
    let w = Number(arg1);
    let h = Number(arg2);
    
    let sideH = (h * 100) - 100;
    let numberOfChair = parseInt(sideH / 70);
    let sideW = (w * 100);
    let line = parseInt(sideW / 120);

    let totalSeats = (numberOfChair * line) - 3
    
    console.log(totalSeats);
};
solution(8.4, 5.2);