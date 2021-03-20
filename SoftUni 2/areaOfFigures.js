function areaCalculation(shape, num1, num2){

    let area = 0;
    
    if(shape === "square") {
    
    side = Number(num1);
    
    area = side * side;
    
    } else if(shape === "rectangle") {
    
    sideA = Number(num1);
    
    sideB = Number(num2);
    
    area = sideA * sideB;
    
    }else if(shape === "circle"){

    side = Number(num1);

    area = side * side * Math.PI;
    
}else if(shape === "triangle"){

    sideA = Number(num1);

    sideB = Number(num2);   
  
    area = sideA * sideB / 2;
}
    
    console.log(area.toFixed(3));
    
    };
    areaCalculation("triangle","4.5","20")
    

    