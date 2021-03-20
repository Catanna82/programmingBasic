function solution (arg1,arg2, arg3, arg4){
    let v = Number(arg1);
    let p1 = Number(arg2);
    let p2 = Number(arg3);
    let h = Number(arg4);
    let v1 = p1 * h;
    let v2 = p2 * h;
    let total = v1 + v2;
    let percent = total * 0.1;
    let v1p = percent - (v1 * 0.1);
    let v2p = percent - (v2 * 0.1);
    if (v >= total){
        
        console.log (`The pool is ${total * 0.1}% full. Pipe 1: ${v1p}%. Pipe 2: ${v2p}%.`)
    }
    else if (v < total){
        console.log(`For ${h} hours the pool overflows with ${(total - v).toFixed(2)} liters.`)
    };



};
solution (1000, 100, 120, 3)