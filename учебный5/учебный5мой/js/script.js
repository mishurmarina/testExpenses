let menu = document.querySelectorAll(".menu-item");
menu[1].innerHTML = 'Второй пункт';
menu[2].innerHTML = 'Третий пункт';
let copy = menu[3].cloneNode(true);
copy.innerHTML = 'Пятый пункт';
let li = document.querySelector('li');
li.appendChild(copy);

// let style = getComputedStyle(menu[3]);
// console.log(style.width);выводила ширину окошка

console.log(getComputedStyle(document.body));//вывелась куча свойств
let computedStyle = getComputedStyle(document.body);
console.log(computedStyle.backgroundImage);
//let styleBody = document.querySelector('body').style;
// for (let i = 0, length = styleBody.length; i < length; i++){
//     console.log(styleBody[i]);   
// }
let body = document.querySelector('body');
console.log(body.getAttribute('backgroundImage'));//через атрибут 
//поменять картинку нельзя
//body.setAttribute('backgroundImage','url(../img/apple_true.jpg)');
console.log(body.getAttribute('backgroundImage'));//эксперимент
let image = window.getComputedStyle(body);//эксперимент
console.log(image.backgroundImage);//эксперимент

body.style.backgroundImage = 'url(../img/apple_true.jpg)';
console.log(image.backgroundImage);

let title = document.querySelector('#title');
title.innerHTML = 'Мы продаём только подлинную технику Apple';

let adv = document.querySelector('.adv');
adv.parentNode.removeChild(adv);
let answer = prompt("Каково Ваше отношение к технике Apple?");
document.getElementById('prompt').innerHTML = answer;
