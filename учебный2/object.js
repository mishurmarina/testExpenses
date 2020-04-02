// изучаем объекты:
let options = {
weight: 58,
height: 160,
name : 'Alice'
};
console.log(options.name);
options.bool = false;
options.colors = {
    hair: "blond",
    bg : "red"
};
delete options.bool;
console.log(options); //выводит все свойства 
//можно перебрать объект с помощью цикла:
for ( let key in options){
    console.log("Свойство " + key + " значение - "+ options[key]);
}
//если просто узнать количество свойств:
console.log(Object.keys(options).length);