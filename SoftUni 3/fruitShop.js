function solution(arg1, arg2, arg3){
    arg1 === "banana";
    arg1 === "apple";
    arg1 === "orange";
    arg1 === "grapefruit";
    arg1 === "kiwi";
    arg1 === "pineapple";
    arg1 === "grapes"
    let fruit = arg1 ;
    let day = arg2;
    let quantity = Number(arg3);
    let total = 0;
    
    
    
        switch(day){
            
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday': 
            if(fruit === "banana"){
                 total = quantity * 2.50
                 console.log(total.toFixed(2));          
                 
            }
            else if (fruit === "apple"){
                 total = quantity * 1.20;
                 console.log(total.toFixed(2));  
                 
            }
            else if(fruit === "orange"){
                 total = quantity * 0.85;
                 console.log(total.toFixed(2));  
                
            }
            else if(fruit === "grapefruit"){
                 total = quantity * 1.45;
                 console.log(total.toFixed(2)); 
                 
            }
            else if(fruit === "kiwi"){
                 total = quantity * 2.70;
                 console.log(total.toFixed(2)); 
                 
            }
            else if(fruit === "pineapple"){
                 total = quantity * 5.50;
                 console.log(total.toFixed(2)); 
                 
            }
            else if(fruit === "grapes"){
                 total = quantity * 3.85;
                 console.log(total.toFixed(2)); 
                
            }
            else{
                console.log("error");
            }
            
            break;
            
            case 'Saturday':
            case 'Sunday' :
            if(fruit === "banana"){
                total = quantity * 2.70;
                console.log(total.toFixed(2)); 
                    
            }
            else if (fruit === "apple"){
                total = quantity * 1.25; 
                console.log(total.toFixed(2)); 
                    
            }
            else if(fruit === "orange"){
                total = quantity * 0.90; 
                console.log(total.toFixed(2)); 
                 
            }
            else if(fruit === "grapefruit"){
                total = quantity * 1.60;
                console.log(total.toFixed(2)); 
                     
            }
            else if(fruit === "kiwi"){
                total = quantity * 3.00;
                console.log(total.toFixed(2)); 
                     
            }
            else if(fruit === "pineapple"){
                total = quantity * 5.60;
                console.log(total.toFixed(2)); 
                  
            }
            else if(fruit === "grapes"){
                total = quantity * 4.20;
                console.log(total.toFixed(2)); 
            }
            else{
                console.log("error");
            }
            
            break;   
            default:
                console.log("error");
            break;                        
                    
        }
        
        
        }

solution("tomato",
"workday",
"0.5")








