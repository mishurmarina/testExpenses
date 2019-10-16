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
    savings: true
};

function chooseExpenses(){
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
}
chooseExpenses();

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

function detectDayBudget (){
    AppData.moneyPerDay = (AppData.budjet / 30).toFixed();
    alert("Ежедневный бюджет :  " + AppData.moneyPerDay + " рублей");
}
detectDayBudget ();

function detectLevel (){
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
}
detectLevel ();

function checkSavings (){
 if(AppData.savings == true){
     let save = +prompt("Какова сумма накоплений,"),
     percent = +prompt("Под какой процент?");
     AppData.monthIncome = save/100/12*percent;
     alert("Доход в месяц с Вашего депозита: "+ AppData.monthIncome);
 }   
}
checkSavings();

function chooseOptExpenses (){
    for(let i=0;i < 3;i++){
       let a = i+1, 
         b = prompt("Статья необязательных расходов?");
         AppData.optionalExpenses[a]=b;
    }
}
chooseOptExpenses ();