function solution (arg1, arg2, arg3, arg4) {
    let town = arg1;
    let package = arg2;
    let vip = arg3;
    let days = Number (arg4);
    let vacantionCost = days; 
    if (days > 7){
        vacantionCost = days - 1;
    }
    if (days < 1) {
        console.log (`Days must be positive number!`);
        return;
    } 
    switch (town){       
        case 'Bansko':
        case 'Borovets':
            if (package === "noEquipment") { 
                vacantionCost *= 80;
                if (vip === "yes") {
                    vacantionCost = vacantionCost * 0.95;
                }
            } else if (package === "withEquipment"){
                vacantionCost *= 100;
                if (vip === "yes"){
                    vacantionCost = vacantionCost * 0.90;
                } 
            } else {
                console.log(`Invalid input!`);
                break;
            } 
            console.log(`The price is ${vacantionCost.toFixed(2)}lv! Have a nice time!`);         
            break;
        case 'Varna':
        case 'Burgas':
            if (package === "noBreakfast") { 
                vacantionCost *= 100;
                if (vip === "yes"){
                    vacantionCost = vacantionCost * 0.93;
                }
            } else if (package === "withBreakfast"){
                vacantionCost *= 130;
                if (vip === "yes"){
                    vacantionCost = vacantionCost * 0.88;
                }
            } else {
                console.log(`Invalid input!`);
                break;
            } 
            console.log(`The price is ${vacantionCost.toFixed(2)}lv! Have a nice time!`);     
            break;
        default :
            console.log(`Invalid input!`);
            break;
        
    }


};
solution ("Varna",
    "withBreakfast",
    "no",
    "0"
    );