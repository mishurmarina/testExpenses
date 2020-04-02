// let num=20;
// function showFirstMessage(text){
//     alert(text);
//     console.log(num);
// }
// showFirstMessage("Hello World");
// console.log(num); 

// let calc = function (a,b){
//     return (a+b);
// }
let calc = (a, b) => a + b;
console.log(calc(2, 4));

function retVar() {
    let num = 50;
    return (num);
}
let Num = retVar();
console.log(Num);

// let str = "text";

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

let twelve = "12.2px";

console.log(parseInt(twelve));
console.log(parseFloat(twelve));

alert('ЁSTE'.localeCompare('zealand'));

// let str = 'string';
// function ucFirst(str){
//     if( str == "" ) {return str;}
//    let str1 = str[0].toUpperCase();
//    return(str1+str.slice(1));
// }

// console.log(ucFirst('pet'));

// let strI = 'каталог оборудования XxX';

// function checkSpam(str) {
//    let str1=str.toLowerCase();
//    let str2=str.toUpperCase();

//     let pos = 0;
//     while ((pos = strI.indexOf(str1, pos)) &&
//             (pos = strI.indexOf(str2, pos)) != -1) {
//                 return(pos);
//                // alert('true');
//             }
//             alert('false');
//         }

//         console.log(checkSpam('xxx'));
// let str1 = 'Take a clever question , please';
// function truncate(str , maxlength){
//     if(str.length >(maxlength-1)){
//    let CateStr = str.substr(0,(maxlength-1));
//    return (CateStr+"…");
//     }
//     return (str);
// }
//console.log(truncate(str1,39));
//другой формат условия , прямо в return:
// function truncate(str , maxlength){
//     return (str.length > maxlength) ? 
//          str.slice(0,maxlength-1) + '…'
//      : str;
// }
// console.log(truncate('определение счастья', 8));
// function extractCurrencyValue(str){
//     return str.substr(1,str.length);
// }
function extractCurrencyValue(str){
    return + str.slice(1);//для slce до конца строки
}
console.log(extractCurrencyValue('$1555'));
// callback function:
function haveMoney(value,callback){
    console.log('I have '+value);
    callback();
}
function done(){
    console.log("dollars");
}
haveMoney('500',done);//500 д б в кавычках, а то не работает!!!
// или по-другому:
function hasMoney(value, callback){
    console.log("He hasn't "+value);
    callback();
}
hasMoney("300",function(){
    console.log("Euro");
});
// call-function:
function first(){
    setTimeout(function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
}
first();
second();
// функция берет в качестве аргумента  другую функцию - callback:
function learn(lang,callback){
    console.log("Я стараюсь выучить  "+lang);
    callback();
}
// learn('JS',function(){
//     console.log('Любое сообщение в любой callback функции');
// });
// callback функцию можно задать и отдельно:
function done(){
     console.log('Любое сообщение в любой callback функции');
}
learn("JS",done);// done без круглых скобок!!!