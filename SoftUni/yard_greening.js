function solve(arg){
    let area = arg;
    let totalMoney= area * 7.61;
    let discount= totalMoney * 0.18;
    let finalPrice= totalMoney - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

solve('150')