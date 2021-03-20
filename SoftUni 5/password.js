function solution(input){
    let index = 0;
    let userName = input[index];
    index ++;
    let password = input[index];

    let temporarryPassword = input[index];
    index++;

    while(temporarryPassword !== password){
        temporarryPassword = input[index];
        index ++
    }
    console.log(`Welcome ${userName}!`);
};
solution(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);
