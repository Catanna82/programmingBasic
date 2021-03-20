function solve(input) {
    let index = 0;
    let command = input[index];
    index++;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
   
    while (command !== "Finish" && index < input.length) {
      let name = command;
      let places = Number(input[index]);
      index++;
      let ticketType = input[index];
      index++;
      let ticketsBought = 0;
   
      while (ticketType !== "End") {
        let type = ticketType;
   
        if (type == "student") {
          studentTickets++;
        } else if (type == "standard") {
          standardTickets++;
        } else if (type == "kid") {
          kidTickets++;
        }   
        ticketsBought++;
        if (ticketsBought == places) {
          break;
        }   
        ticketType = input[index];
        index++;
      }   
      console.log(`${name} - ${((ticketsBought / places) * 100).toFixed(2)}% full.`);   
      command = input[index];
      index++;
    }
   
    let total = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${total}`);
    console.log(`${((studentTickets / total) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / total) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / total) * 100).toFixed(2)}% kids tickets.`);
  }
  solve (["The Matrix",
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