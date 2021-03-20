function solution(arg1, arg2){
let a = Number(arg1);
let b = Number(arg2);
let sum = 0;

for(let i = a; i <= b; i++){

    if( i % 9 === 0){
        sum += i;
        
    }

}
console.log(`The sum: ${sum}`);
for(let z = a; z <= b; z++){

    if( z % 9 === 0){
        console.log(z); 
    }

}
};

solution ("100", "200")