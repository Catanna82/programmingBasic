function solution (year, p, h) {
    p = Number(p);
    h = Number(h);
    const weekends = 48;
    let weekendsInSofia = weekends - h;
    let saturdayGames = weekendsInSofia * 3 / 4;
    let holidayGames = p * 2 / 3;
    let allHolidayGames = saturdayGames + h + holidayGames
    let totalGames = 0;

    if (year === "leap"){
        totalGames = allHolidayGames + allHolidayGames * 0.15;        
    } else {
        totalGames = allHolidayGames;
    }
    console.log(Math.floor(totalGames));
};

solution 
("normal",
"6",
"13")




;