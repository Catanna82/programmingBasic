function solution(arg1, arg2){
    let year1 = Number(arg1);
    let year2 = Number(arg2);

    for(let i = year1; i <= year2; i += 4){
        console.log(i)
    }


};
solution("2020", "2032");