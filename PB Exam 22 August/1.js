function solution (arg1, arg2, arg3, arg4, arg5) {
    let priceCPU = Number(arg1);
    let priceVideo = Number(arg2);
    let priceRam = Number(arg3);
    let numberRam = Number(arg4);
    let discount = Number(arg5);
    let cpu = priceCPU * 1.57;
    let video = priceVideo * 1.57;
    let ram = numberRam * priceRam * 1.57;
    let priceDiscount = (cpu + video) - ((cpu + video) * discount)
    let total = priceDiscount + ram;
    
console.log(`Money needed - ${total.toFixed(2)} leva.`)
};
solution (500, 200, 80, 2, 0.05);