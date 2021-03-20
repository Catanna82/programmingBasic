function solution(arg1, arg2, arg3){
    arg1 = Number(arg1);
    arg3 !== arg2
    if(arg2 === "mm"&& arg3 === "cm"){
        console.log((arg1 / 10).toFixed(3));
    }
    else if(arg2 === "mm" && arg3==="m"){

        console.log((arg1 / 1000).toFixed(3));
    }
    else if(arg2 === "m" && arg3 ==="cm"){

        console.log((arg1 * 100).toFixed(3));
    }
    else if(arg2 === "cm" && arg3 === "m"){

        console.log((arg1 / 100).toFixed(3));
    }
    else if(arg2 === "m" && arg3 === "mm"){

        console.log((arg1 * 1000).toFixed(3));
    }
    else if(arg2 === "cm" && arg3 === "mm"){

        console.log((arg1 * 10).toFixed(3));
    };

       
};
solution ("45", "cm", "mm")