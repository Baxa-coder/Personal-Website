// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При  вычисления произашла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;


//     area = 6 * (length * length);

//     return ` Объем куба: ${volume}, площадь всей поверхности:  ${area}`;
// }

// calculateVolumeAndArea(5);

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {

//         return "Ошибка.Проверьте привильность введенного номера места";
//     }


//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
// }

// getCoupeNumber(33);


////////////////////////////////////


// function getTimeFromMinutes(minutesTotal) {
//     if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, провеьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;


//     let hoursStr = '';

//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return ` Это   ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(180)

// function findMaxNumber(a, b, c, d) {

//     if (typeof (a) !== 'number' ||
//         typeof (b) !== 'number' ||
//         typeof (c) !== 'number' ||
//         typeof (d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b, c, d);
//     }
// }

// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', 10);

//////////////////////////////////


// function fib(num) {
//     if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;   

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//         } else {
//             result += `${first}`;
//         }

//         let third = first + second;    
//         first = second;
//         second = third;
//     }

//     return result;

// }

// fib(5) 




// 'use strict'

// function first() {
//     setTimeout(function () {
//         console.log('1st');
//     }, 2000)

// }



// function learnJS(lang, callback) {
//     console, log(`я учу: ${lang}`);
//     callback()
// }

// function done() {
//     console.log(`Я прошел этот урок!`);
// }

// learnJS('JavaScript', done)


// const options1 = {
//     name: 123,
//     width: 2024,
//     height: 2025,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },

//     makeTest: function () {
//         console.log('Test');
//     }
// };


// const { bg, border } = options1.colors // Деструктизация
// const { name, width } = options2.colors // Деструктизация


// //////////////////

// const options2 = {
//     name: 123,
//     width: 2024,
//     height: 2025,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },

//     makeTest: function () {
//         console.log('Test');
//     }
// };

// for (let key in options2) {
//     console.log(`свойство ${key} имеет значение ${options2[key]}`);
// }


// for (let key in options) {
//     console.log(`свойство ${key}`);

// }


// let str = 'testtext'
// let arr = [145, 2123, 4534, 25, 76, 84, 92,]

// for (let key of options1) {
//     console.log(key); //error
// }

// for (let value of str) {
//     console.log(value);
// }

// for (let value of arr) {
//     console.log(value);
// }



///////////////


// const arr = [1123, 2322, 353, 445, 564, 645, 732]

// for (let i = 0; i< arr.length; i++) {
//     console.log(arr[i]);
// }




// const arr = [1123, 2322, 353, 445, 564, 645, 732]


// for (let value of arr) {
//     console.log(value);
// }



// let items = [NaN, 0, 15, false, -22, '', undefined, 47, null, 2, 77]
// let negatives = [NaN, 0, false, '', undefined, null, -0]
// letArrForPositives = []
// letArrForNegatives = []


// for (let i = 0; i < items.length; i++) {
//     if(negatives.includes(items[i])){
//         letArrForPositives.push(items[i])
//     }else{
//         letArrForNegatives .push(items[i])
//     }
// }


// console.log(letArrForPositives);
// console.log(ArrForNegatives);



// const arr = [1123, 2312,353,445,564,645,732]
// arr.length(function (item,index,array) {
// console.log(`${index}; ${item}; from array ${array}`);
// })



// let a = 5;
// let b = a;

// b = b + 5 

// console.log(b);
// console.log(a);



// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]
//     }
//     return objCopy
// }

// const numbers = {
//     a:2,
//     b:5,
//     c: {
//         x:7,
//         y:4,
//     }, 
// }


// const NewCopyObj = copy(numbers)
// NewCopyObj.a = 10
// NewCopyObj.c.x = 10
// console.log(numbers);
// console.log(NewCopyObj);


// let obj = {} 
// const NewCopyObj = Object.assign(obj,numbers)
// NewCopyObj.a = 10
// NewCopyObj.с.x = 10
// console.log(numbers);
// console.log(NewCopyObj);     


// const oldArray = ['a', 'b', 'c',];
// const newArray = oldArray.slice()

// newArray[2] = 'avsddqw'

// console.log(oldArray);
// console.log(newArray);

//////////



// console.log(Object,keys(options));
// console.log(Object,value/(options));
// console.log(Object,entruse(options));





// const num = 49;
// switch (num) {
//     case 49:
//         console.log('test1');
//         break;
//     case 100:
//         console.log('test2');
//         break;
//     case 50:
//         console.log('test3');
//         break;
//     case 200:
//         console.log('test4');
//         break;
//     default:
//         console.log('not found');
//         break;
// }

// for ( let i = 1; i < 8; i++) {
//     console.log(i);
// };



// let result = '';

// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*"
//     }
//     result += '\n';
// }
// console.log(result)



// for (let i = 5; i < 11; i++) {
// console.log(i);
// };


// for (let i = 20; i > 10; i--) {
//     console.log(i);
//     if (i == 12) break

// }

// for (let i = 20; i < 1; i--) {
//     console.log(i);
//     if (i == 2, 20)
//         if (i == 16) continue
// }


// for (let i = 0; i <= 20; i++) {
//     if (i === 16) continue

//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// function fifthask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     consoele.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }



///////////////////////////////////


// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения

//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);
//     // Не трогаем
//     return result;

// }
// firstTask()


// // Место для второй задачи
// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут

//     for (let i = 0; i < data.length; i++) {
//         if (typeof (data[i]) === 'number') {
//             data[i] = data[i] * 2
//         } else if ((typeof (data[i]) === 'string')) {
//             data[i] += ' - done!'
//         }
//     }

//     console.log(data);
// }


// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof data[i] === 'string') {
//             data[i] += ' - done';
//         } else {
//             data[i] *= 2;
//         }
//     }
//     console.log(data);
//     // Не трогаем
//     return data;
// }
// secondTask()

// function thirdTask() {
//        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения

//        const data = [5, 10, 'Shopping', 20, 'Homework'];
//        const  result = [];

//        // Пишем решение вот тут
//        for(let i = 1; i <= data.length; i++){
//         result[i - 1] = data[data.length - i];
//        }

//        // Не трогаем
//        return console.log(result);
//        crossOriginIsolated.log(data[data.length - 1]);
// }

// thirdTask()



// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += "";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*"
//     }
//     result += "\n";
// }

// console.log(result)

// const usdCurr = 20;
// const eurCurr = 32;


// function convert(amount) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr)
// convert(500, eurCurr)


//////////////////////////////




// 'use strict'



// function showFirstMessage() {
//     console.log('Hello world');
// }

// showFirstMessage();




// let hi = "Hello World"


// function showFirstMessage(hi) {
//     console.log(hi);
// }

// showFirstMessage(hi);




// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
//     num = 10
//     console.log(num);
// }


// showFirstMessage("Hello World");
// console.log(num);



// function calc(a, b) {
//     console.log('test1');
//     console.log('test2');
//     return (a + b);
// }


// console.log(calc(4, 3));
// console.log(calc(5, 6));


// const anotherNum = ret();

// function ret() {
//     let num = 52
//     return num
// }

// const anotherNum2 = function ret2() {
//     let num = 50;
//     return num;
// };


// console.log(anotherNum2());
// console.log(anotherNum());



// logger();

// const logger = function () {
//     console.log('Function Expression');
// };

// logger()


// let b = 4
// const calc3 = a => a + b;
// const calc2 = (a,b) => a + b;
// const calc = (a, b) => {return a + b};


// console.log(calc2(2, 3));
// console.log(calc3(2));
// console.log(calc2(2,4));
// console.log(calc3(2));


///////////////////////////

// Функция showFamily
// function showFamily(family) {
//     if (family.length === 0) {
//         return 'Семья пуста';
//     } else {
//         return 'Семья состоит из: ' + family.join(' ');
//     }
// }

// // Примеры использования showFamily
// console.log(showFamily(['Peter', 'Ann', 'Alex', 'Linda'])); // 'Семья состоит из: Peter Ann Alex Linda'
// console.log(showFamily([])); // 'Семья пуста'

// // Функция standardizeStrings
// function standardizeStrings(strings) {
//     strings.forEach(str => {
//         console.log(str.toLowerCase());
//     });
// }

// // Примеры использования standardizeStrings
// standardizeStrings(['Lisbon', 'Rome', 'Milan', 'Dublin']);


// // !2

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         langluges: ['ru', 'eng'],
//         programingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     ShowAgeLangs: function (plan) {
//         const { age } = plan;
//         const { langluges } = plan.skills;
//         let str = `Мне ${age}  и я владею языками:`;

//         langluges.forEach(function (lang) {
//             str += ` ${lang.toUpperCase()}`
//         });

//         return str;

//     }
// };


// console.log(showExprrience(personalPlanPeter));


// function showProgrammingLangs(plan) {
//     let str = ' ';
//     const { propramingLangs } = plan.skills;
//     for (let key in programingLangs) {
//         str += `Язык ${key}изучен на $ {programmingLangs[key]}\n`
//     }

//     return str;
// }


// console.log(showProgrammingLangs(personalPlanPeter));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из';


//     arr.forEach(member => {
//         str += `${member}`
//     });

//     return str;
// }

// console.log(showFamily(family));




// const favoriteCities = ['Libson', 'ROME', 'milan', ' Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     })
// }

// console.log(standardizeStrings(favoriteCities));
  

//////////////////////////



