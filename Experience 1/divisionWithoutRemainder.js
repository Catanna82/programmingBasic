function solution (input) {
  let n = Number(input[0]);
  let index = 1;
  let number = Number(input[index]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 0; i <= n; i++){
    if (number % 2 === 0) {
      p1++;
    }
    if (number % 3 === 0){
      p2++;
    }
    if (number % 4 === 0){
      p3++;
    }
    index++;
    number = Number(input[index]);
  }
  console.log (((p1/n) * 100).toFixed(2) + '%');
  console.log (((p2/n) * 100).toFixed(2) + '%');
  console.log (((p3/n) * 100).toFixed(2) + '%');
}
solution (['3', '3', '6', '9']);