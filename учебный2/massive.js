//let arr = ['first',2,3,'four',5];
// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift('1');
// console.log(arr);

// arr[99] = 99;
// console.log(arr);
// console.log(arr.length);
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// arr.forEach(function( item, i , mass){
//     console.log(i+' : '+item + "(массив: "+ mass + ')');
// });
// for (let key of arr){
//     console.log(key);
// }
// let ans = prompt("", ""),
// arr = [];
// arr = ans.split(',');
// console.log(arr);
// let arr = ['ggg','fgh','dfjkg','y'],
// i = arr.join('/ ' );
// console.log(i);
// let arr = ['ggg','fgh','dfjkg','где'],
// i = arr.sort();
// console.log(i);
let arr = [1,15,4],
i = arr.sort(compareNum);
function compareNum(a,b){
    return a-b;
}
console.log(arr);
 let arrMar = ['Marina','Igor','Marina', 'Ivan'];
     for( let i = 0; i < arrMar.length; i++){
     console.log(arrMar[i]);
 }
let soldier = {
    health: 400,
    armor: 100
};
let john = {
    health: 100
};
john.__proto__= soldier;
console.log(john);
console.log(john.armor);

function Calculator(){
    this.read = function(){
        this. a = +prompt("Введите первое число");
        this. b = +prompt("Введите второе число");
    };
    this.sum = function() {
        return(this.a+this.b);
    };
    this.mul = function(){
        return(this.a * this.b);
    };
}
let calculator = new Calculator();
calculator.read();
alert("Sum= " + calculator.sum());
alert("Mul= " + calculator.mul());

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt("Сколько нужно добавить?");
        //return(this.value); не надо
    };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
console.log(accumulator.value);