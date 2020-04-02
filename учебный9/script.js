// let box = document.getElementById('box'),
// btn = document.getElementsByTagName('button'),
// circle = document.getElementsByClassName("circle"),
// heart = document.querySelectorAll(".heart"),
// oneHeart = document.querySelector('.heart'),
// wrapper = document.querySelector('.wrapper');
// // console.log(box);
// // console.log(btn);
// // console.log(btn[0]);
// // console.log(circle[2]);
// // console.log(heart[1]);
// // console.log(oneHeart);
// box.style.backgroundColor = "blue";
// btn[1].style.width = '140px';
// btn[1].style.borderRadius = '100%';
// circle[0].style.backgroundColor = 'green';
// for ( let i = 0; i < heart.length; i++){
//     heart[i].style.backgroundColor = 'blue';
// }
// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = "green";
// });
// let div = document.createElement('div');
// console.log(div);
// let text = document.createTextNode("Просто текст");
// console.log(text);

// div.classList.add('box');
// //document.body.appendChild(div);
// //wrapper.appendChild(div);

// //div.innerHTML = '<h1>Hello world</h1>';
// div.textContent = 'Hello world';
// document.body.insertBefore(div,circle[0]);
// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[1]);
// document.body.replaceChild(btn[1],circle[1]);

//Скрипты и время их выполнения:
// let timerID = setTimeout(sayHello,3000);
// clearTimeout(timerID);
// let timerID = setInterval(sayHello,3000);
// clearTimeout(timerID);
// function sayHello(){
//     console.log("Hell0 World!");
// }
// let timerID = setTimeout(function log(){
//     console.log("Hello");
//     setTimeout(log,2000);
// });

let btn = document.querySelector('.btn'),
elem = document.querySelector('.box'),
field =  document.querySelector('.field');
function myAnimation(){
    let pos = 0;
    let id = setInterval(frame,10);
    function frame(){
        if(pos == 130){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos+'px';
            elem.style.left = pos+'px';
        }
    }
}
btn.addEventListener('click',myAnimation);
let btnBlock = document.querySelector('.btn-block'),
btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event){
    if(event.target && event.target. matches ('button.first')){
        console.log("Hello!");
    }
});
