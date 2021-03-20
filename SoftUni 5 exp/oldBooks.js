function solution (books) {
    let [ bookNeed , ...others] = books;

    let index = 1;

    while(others[index] !== undefined && others[index] !== "No More Books") {
        index ++;
    }

    if(others[index] === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index} books.`)
    } else {
        console.log(`You checked ${index - 1} books and found it.`)
    }

};
solution 
(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])






 ;