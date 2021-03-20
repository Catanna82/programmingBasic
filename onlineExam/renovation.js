function solution (input) {
    let [h, w, persrntWindow, ...others] = input;
    h = Number(h);
    w = Number(w);
    persrntWindow = Number(persrntWindow);
    let allArea = (w * h * 4);
    let area = Math.ceil(allArea - allArea * (persrntWindow / 100));

    
    let index = 0;
    while(others[index] !== undefined && others[index] !== "Tired!") {
        area -= Number(others[index]) * 1;
        index ++;
    }
    if (others[index] === "Tired!") {
        console.log(`${area} quadratic m left.`)
    } else if(area < 0) {
        console.log(`All walls are painted and you have ${Math.abs(area)} l paint left!`)
    } else {
        console.log(`All walls are painted! Great job, Pesho!`)
    }
}

solution (["2",
    "3",
    "25",
    "6",
    "7",
    "8"
    ]) ;