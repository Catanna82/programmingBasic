function solution(arg1, arg2){
    let month = arg1;
    let nights = Number(arg2);
    let studioCost = 0;
    let apartmentCost = 0;

    switch (month){

        case 'May' :
        
    if(nights >= 7 && nights <= 14){
                
        studioCost = nights * 50 * 0.95;
        apartmentCost = nights * 65;
        
    }
    else if (nights > 14){

        studioCost = nights * 50 * 0.70;
        apartmentCost = nights * 65 *0.90;              
        
    }
    break;
    case 'October':
        if(nights >= 7 && nights <= 14){
                
            studioCost = nights * 50 * 0.95;
            apartmentCost = nights * 65;            
            
        }
        else if (nights > 14 ){
    
            studioCost = nights * 50 * 0.70;
            apartmentCost = nights * 65 *0.90;           
            
        };
    break;
    case 'June':

    if (nights <= 14){

        studioCost = nights * 75.20 ;
        apartmentCost = nights * 68.70;       
        
    }
    else if (nights > 14){

        studioCost = nights * 75.20 * 0.80;
        apartmentCost = nights * 68.70 * 0.90;        
        
    }
    break;
    case 'September':

        if (nights <= 14){

            studioCost = nights * 75.20 ;
            apartmentCost = nights * 68.70;            
                
        }
        else if (nights > 14){
    
            studioCost = nights * 75.20 * 0.80;
            apartmentCost = nights * 68.70 * 0.90;            
            
        }
    break;
    case 'July':
    
    if (nights > 14){

        studioCost = nights * 76;
        apartmentCost = nights * 77 * 0.90;        
        
    }
    else if (nights <= 14){
        studioCost = nights * 76;
        apartmentCost = nights * 77;
        
    }
    break;
    case 'August':
      
    if (nights > 14){

            studioCost = nights * 76;
            apartmentCost = nights * 77 * 0.90;            
            
        }
        else if (nights <= 14){
            studioCost = nights * 76;
            apartmentCost = nights * 77;           
            
        }
        break;
        };     
        console.log (`Apartment: ${apartmentCost.toFixed(2)} lv.`);
        console.log (`Studio: ${studioCost.toFixed(2)} lv.`); 
};
solution("May",
"15")


;