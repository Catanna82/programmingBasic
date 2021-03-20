function solution(days, room, result) {
    days = Number(days);

    let total = 0 ;

    switch (room) {
        case 'room for one person':
            total = (days - 1) * 18;
            break;
        case 'apartment':
            total = (days - 1) * 25;
            if(days < 10) {
                total = total * 0.70;
            } else if(days >= 10 && days <= 15) {
                total = total * 0.65;
            } else if (days > 15){
                total = total * 0.50
            }
            break;
        case 'president apartment':
            total = (days - 1) * 35;
            if(days < 10) {
                total = total * 0.9;
            }
            else if (days >= 10 && days <= 15) {
                total = total * 0.85;
            }
            else if (days > 15){
                total = total * 0.8;
            }
            break;
    }

    switch (result) {
        case "positive":
            total = total + (total * 0.25);   
            break;
        case "negative":
            total = total - (total * 0.1);
            break;
    }

    console.log(total.toFixed(2));
};

solution("12",
"room for one person",
"positive")

;