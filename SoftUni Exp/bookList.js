function books(numberPages,pages,days){
    numberPages= Number(numberPages);
    pages= Number(pages);
    days= Number (days);
let timeOneBook= numberPages/pages;
let timePerDay=timeOneBook/days;
console.log(timePerDay);

}
books ("212","20","2")