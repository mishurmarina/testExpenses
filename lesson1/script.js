'use strict';
let person = {
    name: "Marina",
    age: 58,
    isMarried: true
};
confirm("Есть ли Вам 18?", "да");
let answer = prompt("Есть ли Вам 18?", "да");
console.log(typeof (person));

let money = +prompt("Ваш бюджет на месяц?", "");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(time);

//let timeData;


let AppData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {


        console.log("Done");
        AppData.expenses[a] = b;
    } else {
        alert("Введите непустую строку");
        a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
    }
}
let i = 0;
/*while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {


        console.log("Done");
        AppData.expenses[a] = b;

    }
    i++;
}
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {


        console.log("Done");
        AppData.expenses[a] = b;

    }
    i++;
} while (i < 2);*/

AppData.moneyPerDay = AppData.budjet / 30;
alert("Ежедневный бюджет :  " + AppData.moneyPerDay + " рублей");

if (AppData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (AppData.moneyPerDay > 100 &&
    AppData.moneyPerDay < 1000) {
    console.log("Средний уровень достатка");
} else if (AppData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}