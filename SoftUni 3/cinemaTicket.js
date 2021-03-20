function solution(arg){
    let day = arg;
    let ticketPrice = 0;
    switch(day){

        case 'Monday':
            ticketPrice = 12;
        break;
        case 'Tuesday':
            ticketPrice = 12;
        break;
        case 'Wednesday':
            ticketPrice = 14;
        break;
        case 'Thursday':
            ticketPrice =  14;
        break;
        case 'Friday':
            ticketPrice = 12;
        break;
        case 'Saturday':
            ticketPrice = 16;
        break;
        case 'Sunday':
            ticketPrice = 16;
        break;
    }
console.log(ticketPrice);

};

solution("Sunday");

// if(day === "Monday"||day === "Tuesday"||day === "Friday"){
//console.log(12)}
//else if(day === "Wednesday"||day === "Thursday"){
//console.log(14)}
//else{console.log(16)}  