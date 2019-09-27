'use strict';
let person = {
    name: "Marina",
    age: 58,
    isMarried: true
};
confirm("Есть ли Вам 18?", "да");
let answer = prompt("Есть ли Вам 18?", "да");
console.log(typeof (person));

let money = prompt("Ваш бюджет на месяц?", "");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(time);

//let timeData;


let AppData = {
    budjet: money,
    timeData: time,
    expenses: {
        "answer1": "answer11"
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
let answer1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer2 = prompt("Во сколько обойдется?", ""),

    answer3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer4 = prompt("Во сколько обойдется?", "");
console.log(answer1 + "  требуется  " + answer2 + "  рублей");
AppData.expenses.answer1 = answer2;
AppData.expenses.answer3 = answer4;
alert("Бюджет на 1 день составляет  " + AppData.budjet / 30 + " рублей");