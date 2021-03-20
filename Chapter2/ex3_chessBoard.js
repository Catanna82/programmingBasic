const size = 16;
const str1 = ' ';
const str2 = '#';
for (let i = 0; i < size; i++) {
    let result = '';
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            result += str1;
        } else {
            result += str2;
        }
    }
    console.log(result);
}
