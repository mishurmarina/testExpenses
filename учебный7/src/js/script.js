'use strict';
let person = {
    name: "Marina",
    age: 58,
    isMarried: true
};
confirm("Есть ли Вам 18?", "да");
let answer = prompt("Есть ли Вам 18?", "да");
console.log(typeof (person));

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");

    }
}
start();

//let timeData;

let AppData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {


                console.log("Done");
                AppData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        AppData.moneyPerDay = (AppData.budjet / 30).toFixed();
        alert("Ежедневный бюджет :  " + AppData.moneyPerDay + " рублей");
    },
    detectLevel: function () {
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

    },
    checkSavings: function () {
        if (AppData.savings == true) {
            let save = +prompt("Какова сумма накоплений,"),
                percent = +prompt("Под какой процент?");
            AppData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с Вашего депозита: " + AppData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = i + 1,
                b = prompt("Статья необязательных расходов?");
            AppData.optionalExpenses[a] = b;
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)', "");
        while ((typeof(items))  !='string' || items == "" || (typeof(items)) == null) {
            items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)', "");
        }
        AppData.income = items.split(', ');
        AppData.income.push(prompt('Может что-то ещё?'));
        while ((typeof(AppData.income[AppData.income.length - 1])) != 'string' || AppData.income[AppData.income.length - 1] == "" ||
           (typeof(AppData.income[AppData.income.length - 1])) == null) {
            AppData.income.pop();
            AppData.income.push(prompt('Может что-то ещё?'));
        }
        //AppData.income.push(prompt('Может что-то ещё?'));
        AppData.income.sort();
        AppData.income.forEach(function(items, i  ){
            console.log( i+1 + '  Способы доп. заработка :  ' + items);
        });
    }
};
AppData.chooseExpenses();
AppData.detectDayBudget();
AppData.detectLevel();
AppData.checkSavings();
AppData.chooseOptExpenses();
AppData.chooseIncome();
for ( let key in AppData){
    console.log("Наша программа включает в себя данные:  " + key + "  имеет значение  " + 
    AppData[key]);
}


/*let i = 0;
while (i < 2) {
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