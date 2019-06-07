'use strict';
let money = prompt("Ваш бюджет на месяц?", "");
console.log(money); 
let time = prompt("Введите дату в формате YYYY-MM-DD","");
console.log(time);

//let timeData;
let answer1 = prompt("Введите обязательную статью расходов в этом месяце","");
let answer11 = prompt("Во сколько обойдется?","");

let  AppData= {
    money,
    timeData : time,
    expenses : {"answer1": "answer11"},
    optionalExpenses : {},
    income:[],
    savings: false
};


answer1= prompt("Введите обязательную статью расходов в этом месяце","");
answer11 = prompt("Во сколько обойдется?","");
console.log (answer1+"  требуется  "+answer11+"  рублей");
alert("Бюджет на 1 день составляет  "+ money/30+" рублей");

