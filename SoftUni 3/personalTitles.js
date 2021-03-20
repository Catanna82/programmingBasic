function solution(arg1, arg2){
    let age = Number(arg1);
    let gender = arg2;

    switch(gender){
        case 'f':
            if(age < 16){
                console.log("Miss");
            }
            else if(age >=16){
                console.log("Ms.");
            
            };

        break;

        case 'm':
            if(age < 16){
                console.log("Master");
            }
            else if(age >= 16){
                console.log("Mr.");
            };

        break;
    
    };


};

solution("17",
"m")
;