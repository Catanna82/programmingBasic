function water(a, b, h, percent) {
    let pers = Number(percent / 100) ;
    let w = Number(0.001);
    let v = Number(a * b * h);
    let l = Number(v * w);

    totalLitres = l * (1- pers);

    console.log(totalLitres);
};
water(85, 75, 47, 17);
