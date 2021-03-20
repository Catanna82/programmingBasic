function solution(arg1, arg2){
    let degreece = Number(arg1);
    let typeOfTheDay = arg2
    

    let outfit = "";
    let shoes = "";

    if ( typeOfTheDay === 'Morning' && degreece ){
        if (degreece >= 10 && degreece <= 18){
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        }
       else if (degreece > 18 && degreece <= 24){
            outfit = "Shirt"
            shoes = "Moccasins"
        
        }
        else if (degreece >= 25){
            outfit = "T-Shirt"
            shoes = "Sandals"

        }
  
    }
  else if (typeOfTheDay === 'Afternoon'){
     if (degreece >= 10 && degreece <= 18){
        outfit = "Shirt"
        shoes = "Moccasins"
        }
        else if(degreece > 18 && degreece <= 24){
            outfit = "T-Shirt"
            shoes = "Sandals"
        }
        else if(degreece >= 25){
            outfit = "Swim Suit"
            shoes = "Barefoot"
        }
  }
  else if (typeOfTheDay === 'Evening'){
      
        outfit = "Shirt"
        shoes = "Moccasins"
        
    
      }

  

console.log(`It's ${degreece} degrees, get your ${outfit} and ${shoes}.`)
}

solution( '16', 'Morning')