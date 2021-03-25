// TASK1 присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
let hello = `hello`;
console.log(hello);
document.write(hello);

let url = `owu com ua`;
console.log(url);
document.write(url);

let randomNumbers = `1 10 -199 123 16`;
console.log(randomNumbers);
document.write(randomNumbers);

let numberP = `3.14`;
console.log(numberP);
document.write(numberP);

let e = `2.7`;
console.log(e);
document.write(e);

let t = `true`;
console.log(t);
document.write(t);

let f = `false`;
console.log(f);
document.write(f);

// TASK2 переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
hello = 'This';
console.log(hello);
document.write(hello);

url = `is`;
console.log(url);
document.write(url);

randomNumbers = `Sparta`;
console.log(randomNumbers);
document.write(randomNumbers);

// TASK3 Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const nameTest = 'Olexander';
console.log(nameTest);
document.write(nameTest);

const surnameTest = 'Vasuliovich';
console.log(surnameTest);
document.write(surnameTest);

const lastnameTest = 'Tatsei';
console.log(lastnameTest);
document.write(lastnameTest);

const num1 = 1;
console.log(num1);
document.write(num1);

const num2 = 2;
console.log(num2);
document.write(num2);

const num3 = 3;
console.log(num3);
document.write(num3);

// TASK4 при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
const userName = prompt(`What is u name?`);
console.log(userName);
document.write(userName);

const midlleName = prompt(`What is u madlle name ?`);
console.log(midlleName);
document.write(midlleName);

const surname = prompt(`What is u surname?`);
console.log(surname);
document.write(surname);

// TASK5 Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
let person = ` ${userName} ${midlleName} ${surname} `;
console.log(person);

// TASK6 Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
const sisName = prompt(`What is u sis name?`);
console.log(sisName);
document.write(sisName);

const sisMidlleName = prompt(`What is u sis madlle name ?`);
console.log(sisMidlleName);
document.write(sisMidlleName);

const sisSurname = prompt(`What is u sis surname?`);
console.log(sisSurname);
document.write(sisSurname);


const momName = prompt(`What is u mom name?`);
console.log(momName);
document.write(momName);

const momMidlleName = prompt(`What is u mom madlle name ?`);
console.log(momMidlleName);
document.write(momMidlleName);

const momSurname = prompt(`What is u mom surname?`);
console.log(momSurname);
document.write(momSurname);

let person1 = `${sisName} ${sisMidlleName} ${sisSurname} ${momName} ${momMidlleName} ${momSurname}`;
console.log(person1);

// TASK7  при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
let userAge = +prompt(`U age ?`);
console.log(userAge);

let sisAge = +prompt(`U sis age ?`);
console.log(sisAge);

let momAge = +prompt(`U mom age ?`);
console.log(momAge);

// TASK8 при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let number1 = prompt(`write number1`);
number1 = parseInt(number1);
console.log(number1);

let number2 = prompt(`write number2`);
number2 = parseInt(number2);
console.log(number2);

let number3 = prompt(`write number3`);
number3 = parseInt(number3);
console.log(number3);

let number4 = prompt(`write number4`);
number4 = parseInt(number4);
console.log(number4);

let result = `${number1 + number2 + number3 + number4}`;
console.log(result);


// TASK9 при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let number11 = prompt(`write number11`);
number11 = parseFloat(number11);
console.log(number11);

let number22 = prompt(`write number22`);
number22 = parseFloat(number22);
console.log(number22);

let number33 = prompt(`write number33`);
number33 = parseFloat(number33);
console.log(number33);

let result1 = `${number11 + number22 + number33}`;
console.log(result1);

// TASK10  при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

let number111 = prompt(`write number111`);
number111 = parseInt(number111)
console.log(Math.round(number111));

let number222 = prompt(`write number222`);
number222 = parseInt(number222)
console.log(Math.round(number222));

let number333 = prompt(`write number333`);
number333 = parseInt(number333);
console.log(Math.round(number333));

let result3 = `${(number111 + number222 + number333)}`;
console.log(result3);


// TASK11 при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let firstNum = prompt(`Wright first num`);
firstNum = parseInt(firstNum);
let secondNum = prompt(`Wright second num`);
secondNum = parseInt(secondNum);
console.log(Math.pow(firstNum, secondNum));

// TASK12 При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
let a = 100;
console.log(typeof (a));

let b = '100';
console.log(typeof (b));

let c = true;
console.log(typeof (c));

let d = undefined;
console.log(d);

// TASK13 Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
let a1 = 5 < 6;
console.log(a1);

let a2 = 5 > 6;
console.log(a2);

let a3 = 5 == 6;
console.log(a3);

let a4 = 5 === 6;
console.log(a4);

let a5 = 10 == 10;
console.log(a5);

let a6 = 10 === 10;
console.log(a6);

let a7 = 10 > 10;
console.log(a7);

let a8 = 10 < 10;
console.log(a8);

let a9 = 10 != 10;
console.log(a9);

let a10 = 123 === `123`;
console.log(a10);

let a11 = 123 == `123`;
console.log(a11);











