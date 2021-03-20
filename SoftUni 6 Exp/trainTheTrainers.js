function solution (input) {
let totalJuriCount = Number (input[0]);
let index = 1;
let totalAverageResult = 0;
let totalPreentation = 0;

let presentation = input[index];

while (presentation !== "Finish") {

    let totalJuriResult = 0;

    for (let juri = 1; juri <= totalJuriCount; juri++) {
        index++;
        totalJuriResult += Number(input[index]);

    }

    let average = totalJuriResult / totalJuriCount;
    console.log(`${presentation} - ${average.toFixed(2)}.`)

    totalAverageResult += average;
    totalPreentation++;

    index++
    presentation = input[index];
}
let totalAverage = totalAverageResult / totalPreentation
console.log (`Student's final assessment is ${totalAverage.toFixed(2)}.`);

}

solution 
(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])



;