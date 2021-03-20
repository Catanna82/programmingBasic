function solution (input) {
    let index = 0;
    let movieName = '';
    let totalCapacity = 0;
    let movieCapacity = 0;
    let standardTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;

    while (index < input.length) {
        movieName = input[index];
        totalCapacity = parseInt(input[++index]);
        index++;
        movieCapacity = 0;
        while(input[index] !== 'End' && input[index] !== 'Finish') {
            if(movieCapacity >= totalCapacity) {
                index++;
                break;
            }
            const ticketType = input[index++];
            movieCapacity++;
            switch(ticketType) {
                case 'standard':
                    standardTickets++;
                    break;
                case 'kid':
                    kidTickets++;
                    break;
                case 'student':
                    studentTickets++;
                    break;
            }
        }

        index++;
        const percentFull = ((movieCapacity / totalCapacity) * 100).toFixed(2);
        console.log(`${movieName} - ${percentFull}% full.`);
    }
    const allTickets = standardTickets + kidTickets + studentTickets;
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${(studentTickets / allTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / allTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / allTickets * 100).toFixed(2)}% kids tickets.`);
};
