function solution (...input) {
    let index = 0;
    let startEggs = Number(input[index]);
    index++;
    let counter = input[index];
    index++;
    let soldEggs = Number(input[index]);
    let allSold = 0; 
    let eggsLeft = startEggs;
    while (counter !== 'Close' && eggsLeft > 0){
        if (counter === 'Buy'){
            eggsLeft -= soldEggs;
            allSold += soldEggs;
        }
        if (counter === 'Fill'){
            eggsLeft += soldEggs;
        }
        index++;
        counter = input[index];
        index++;
        soldEggs = Number(input[index]);

        if (eggsLeft < soldEggs) {
            console.log('Not enough eggs in store!');
            console.log(`You can buy only ${eggsLeft}.`)
            break;
        }
    }
    if (counter === 'Close'){
        console.log('Store is closed!');
        console.log(`${allSold} eggs sold.`);
    }       

};
    
solution ("13", "Buy", "8", "Fill", "3", "Buy", "10");