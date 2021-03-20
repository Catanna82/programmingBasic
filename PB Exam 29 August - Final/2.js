function solution (arg1, arg2, arg3) {
    let numberOfTicket = Number(arg1);
    let budget = Number(arg2);
    let ticketPrice = Number(arg3);

    let total = numberOfTicket * ticketPrice;

    if (total > budget) {
        console.log(`The budget of ${budget}$ is not enough. Your client can't buy ${numberOfTicket} tickets with this budget!`);
    } else {
        console.log(`You can sell your client ${numberOfTicket} tickets for the price of ${total}$!`);
        console.log(`Your client should become a change of ${budget - total}$!`);
    }
};
solution (3, 900, 300);