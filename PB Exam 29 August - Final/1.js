function solution (arg1, arg2, arg3, arg4) {
    let pencil = Number(arg1);
    let feltTipPens = Number(arg2);
    let sketchbook = Number(arg3);
    let notebook = Number(arg4);

    let pencilCost = pencil * 4.75;
    let feltTipPensCost = feltTipPens * 1.80;
    let sketchbookCost = sketchbook * 6.50;
    let notebookCost = notebook * 2.50;

    let total = pencilCost + feltTipPensCost + sketchbookCost + notebookCost;
    let final = total - ((total * 5) / 100);
console.log (`Your total is ${final.toFixed(2)}lv`)

};
solution (
    5,
    3,
    5,
    15

    );