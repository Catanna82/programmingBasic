function solution  (input) {
  let groups = Number(input[0]);
  let musalaCount = 0;
  let monblanCount = 0;
  let kilimanjaroCount = 0;
  let k2Count = 0;
  let everestCount = 0;
  let index = 1
  let allPeople = 0;
  for (i = 0; i < groups;  i++){
    let people = Number(input[index]);
    allPeople += people;
    index++;
    if (people <=5){
      musalaCount += people;
    } else if (people <= 12){
      monblanCount += people;
    } else if (people <= 25){
      kilimanjaroCount += people;
    } else if (people <= 40) {
      k2Count += people;
    } else {
      everestCount += people;
    }
    
  }
  musala = musalaCount / allPeople * 100;
  monblan = monblanCount / allPeople * 100;
  kilimanjaro = kilimanjaroCount / allPeople * 100;
  k2 = k2Count / allPeople * 100;
  everest = everestCount / allPeople * 100
  console.log((musala.toFixed(2)) + '%');
  console.log((monblan.toFixed(2)) + '%');
  console.log((kilimanjaro.toFixed(2)) + '%');
  console.log((k2.toFixed(2)) + '%');
  console.log((everest.toFixed(2)) + '%');
};
solution ([
    '5', '25',  '41',
    '31',  '250', '6'
    
  ]);