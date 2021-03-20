function solution(text) {
    const data = {a: 1, e: 2, i: 3, o: 4, u: 5};
    let sum = text.split('').reduce((acc, curr) => {
        return acc + (data[curr] || 0);
    }, 0);
    console.log(sum);
};

solution('bamboo');
