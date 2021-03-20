function solution (input) {
    let soldGame = Number(input[0]);
    let hearthstone = 0;
    let fortnite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i <= soldGame; i++){
        switch (input[i]){
            case 'Hearthstone':
                hearthstone++;
                break;
            case 'Fornite':
                fortnite++;
                break;
            case 'Overwatch':
                overwatch++;
                break;
            default:
                others++;
                break;    
        }

    }

    console.log (`Hearthstone - ${((hearthstone / soldGame) * 100).toFixed(2)}%`);
    console.log (`Fornite - ${((fortnite / soldGame) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((overwatch / soldGame) * 100).toFixed(2)}%`);
    console.log (`Others - ${((others / soldGame) * 100).toFixed(2)}%`);
};
solution (["4",
"Hearthstone",
 "Diablo 2",
 "Star Craft 2"
 
 ]);