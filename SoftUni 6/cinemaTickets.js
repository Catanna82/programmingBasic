function solution (input) {
let index = 0;
let filmName = input[index];
index++;
let freeSpaces = Number(input[index]);
index++;
let studentsTickets = 0;
let standardTickets = 0;
let kidsTicket = 0;
let command = input[index];
let allTickets = 0;
let allStudent = 0;
let allStandard = 0;
let allKids =0;
let capasity = 0;
while  (command !== undefined && command !== "Finish") {
    if (studentsTickets + standardTickets + kidsTicket >= freeSpaces) {
        index++;
        break;
    }    
    if (command === "student") {
        studentsTickets++;        
    } else if (command === "standard") {
        standardTickets++;       
    } else if (command === "kid") {
        kidsTicket++
    } 
    index++;
    allTickets++;
    command = input[index];
    while (command === "End") {
        index++;        
        allStudent += studentsTickets;
        allStandard += standardTickets;        
        allKids += kidsTicket;
        capasity = ((studentsTickets + standardTickets + kidsTicket) / freeSpaces) * 100;
        console.log(`${filmName} - ${capasity.toFixed(2)}% full.`);
        filmName = input[index];
        index++;
        freeSpaces = Number(input[index]);
        index++;
        command = input[index];
        standardTickets = 0;
        studentsTickets = 0;
        kidsTicket = 0;       
    }           
}
    allStudent += studentsTickets;
    allStandard += standardTickets;
    allKids += kidsTicket;
    capasity = ((studentsTickets + standardTickets + kidsTicket) / freeSpaces) * 100;
    console.log(`${filmName} - ${capasity.toFixed(2)}% full.`);
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${(allStudent / allTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(allStandard / allTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(allKids / allTickets * 100).toFixed(2)}% kids tickets.`);
};
solution (["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
 ;