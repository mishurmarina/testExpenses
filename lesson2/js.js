let num = 50;
if (num < 49) {
    console.log("Неверно")
} else if (num > 100) {
    console.log("Перебор")
} else {
    console.log("Верно")
};
(num == 50) ? console.log("Верно"): console.log("Неверно");
/*
тернарный оператор*/
//конструкция switch:
switch (num) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num < 80:
        console.log("Все еще много");
        break;
    case 50:
        console.log("верно");
        break;
    default:
        console.log("Что-то пошло не так");
        break;
}
let x = [1, 2, 3];
let y = [1, 2, 3];
//alert(+"Infinity");
if (x == y) {
    console.log("yes")
};
console.log(0 || "" || 2 || undefined || true || false);
console.log(null || 10 && 83 && 36 + 'лет');
console.log( false - null + true + 19 + 'часов');
console.log([] + 'Анусино' + '' + 17 + '.' + 10);
console.log('всегда(' && (undefined || [0]) && 'ждём');
alert('nothing)' && "приезжай");
