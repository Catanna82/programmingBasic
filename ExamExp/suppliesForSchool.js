function solution (arg1, arg2, arg3, arg4) {
    let penPackets = Number(arg1);
    let marcersPackets = Number(arg2);
    let cleanerLitres = Number(arg3);
    let discount = Number(arg4);

    let penCount = penPackets * 5.80;
    let marcersCount = marcersPackets * 7.20;
    let cleanerCount = cleanerLitres * 1.20;

    let total = penCount + marcersCount + cleanerCount;
    let sum = total - (total * discount / 100);

    console.log (sum.toFixed(3));
};

solution ("4",
    "2",
    "5",
    "13"
    );