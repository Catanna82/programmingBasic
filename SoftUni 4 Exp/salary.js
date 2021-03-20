function solution (arg) {
    let tabs = Number(arg[0]);
    let salary = Number(arg[1]);
    
    for (let i = 2; i <= arg.length; i++) {
        if (arg[i] === 'Facebook') {
            salary -= 150;
        } else if (arg[i] === 'Instagram') {
            salary -= 100;
        } else if (arg[i] === 'Reddit') {
            salary -= 50;
        }
        if(salary <= 0) {
            return console.log('You have lost your salary.');
        }
    }
    console.log(salary);
};

solution(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
