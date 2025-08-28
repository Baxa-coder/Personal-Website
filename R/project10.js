// 'use strict'


// let str = 'text'
// let strObj = new String(str)

// console.log(typeof (str));
// console.log(typeof (strObj));

// const soldiers = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('Hello');
//     }
// };


// const john = {
//     health: 100,
// };

// john.__proto__ = soldiers;

// Object.setPrototypeOf(john, soldiers);

// console.log(john);
// console.log(john.armor);
// john.sayHello()

// const john2 = Object.create(soldiers);

// console.log(john2.armor);


// function hello() {
//     console.log("Hello World");

// }
// hello();

// function hi() {
//     console.log("Say Hi");
// }

// hi();


// const arr = [1, 14, 4, 30, 54],
//     sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sorted);


// console.log(typeof (Number(typeof (typeof (Boolean(1))))));
// console.log(typeof (Boolean('text')));
// console.log(!!'text');



// let number = 5;

// function logNumber() {
//     let number = 4;
//     console.log(number);
// }

// number = 6;

// logNumber()



////////////////////

'use strict'


// 1) Создать переменную numberOfFilms и в неё поместить 
// ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'


// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }


// const  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

// const  personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     private : false,
// }

// const a = prompt('Один из последних просмотренных фильмов?', '')
// const b = +prompt('На сколько оцените его?', '')
// const c = prompt('Один из последних просмотренных фильмов?', '')
// const d = +prompt('На сколько оцените его?', '')


// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d

// console.log(personalMovieDB);


//----------------------------------------------------------------------------------------------------------

/* 2 Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privet: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);


//---------------------------------------------------------------------------------


/*3 Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство
 privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет
 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ
 записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

// 'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start()

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();

//-------------------------------------------------------------------------

/* 4 Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// 'use strict';

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i < 2; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre === '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }


//             let genres = prompt(`Введите ваши любимые жанры через запятую`);

//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     };
// }


// function isBudgetEnough(shoppingMallData) {
//     // Переменные для хранения общей площади и общего объема
//     let totalArea = 0;
//     let totalVolume = 0;

//     // Вычисляем общую площадь всех магазинов
//     shoppingMallData.shops.forEach(shop => {
//         totalArea += shop.length * shop.width;
//     });

//     // Общий объем всего торгового центра
//     totalVolume = totalArea * shoppingMallData.height;

//     // Стоимость отопления всего объема
//     const heatingCost = totalVolume * shoppingMallData.heatingCostPerCubicMeter;

//     // Проверяем, хватает ли бюджета
//     if (heatingCost <= shoppingMallData.monthlyBudget) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// // Пример данных
// const shoppingMallData = {
//     shops: [
//         { length: 10, width: 5 },
//         { length: 15, width: 7 },
//         { length: 20, width: 10 }
//     ],
//     height: 3,
//     heatingCostPerCubicMeter: 5,
//     monthlyBudget: 5000
// };

// console.log(isBudgetEnough(shoppingMallData)); // Вывод: 'Бюджета достаточно' или 'Бюджета недостаточно'




// function sortStudentsByGroups(students) {
//     // Сначала сортируем список студентов по алфавиту
//     students.sort();

//     // Инициализируем массив для групп и строку для оставшихся студентов
//     const groups = [[], [], []];
//     let remainingStudents = [];

//     // Распределяем студентов по группам
//     for (let i = 0; i < students.length; i++) {
//         if (i < 9) { // Всего три группы по 3 человека, итого 9 человек
//             groups[Math.floor(i / 3)].push(students[i]);
//         } else {
//             remainingStudents.push(students[i]);
//         }
//     }

//     // Формируем строку для оставшихся студентов
//     const remainingStudentsStr = remainingStudents.length > 0 
//         ? `Оставшиеся студенты: ${remainingStudents.join(', ')}`
//         : 'Оставшиеся студенты: -';

//     // Возвращаем итоговый массив с группами и строкой оставшихся студентов
//     return [...groups, remainingStudentsStr];
// }

// // Пример данных
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// console.log(sortStudentsByGroups(students));
// Ожидаемый вывод:
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]






// const students = ['Peter','Andrew', 'Ann', 'Mark', 'Josh','Sandra','Cris', 'Bernard', 'Takesi', 'Sam', 'Alucard', 'Melissa', 'Satoro', 'Godjo', 'Sakuna'];

// function sortStudentsByGroups(arr) {
//     arr.sort();

//     const a = [], b = [], c = [], rest = [];


// for (let i = 0; i < arr.length; i++){
//     if (i < 3) {
//         a.push(arr[i]);
//     } else if (i < 6) {
//         b.push(arr[i]);
//     } else if (i < 9) {
//         c.push(arr [i]);
//     }else {
//         rest.push(arr[i]);
//     }
// }

// return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]

// }


// console.log(sortStudentsByGroups(students));


// let arrStr = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Alucard', 'Melissa', 'Satoro Godjo', 'Sakuna']

// let arrNum = [5, 67, 21, 123, 456, 9, 8]

// console.log(arrNum.sort((a,b) => a- b ));
// // for number
// console.log(arrNum.sort()); for string


//////////////////////////////////////

'use strict'

// let x = 5; alert(x++);
// console.log(x);

// console.log([] + false - null + true);
// console.log([] + null);
// console.log(false - null);
// console.log(false - null + []);
// console.log(0 + '');
// console.log(typeof(false - null + []));
// console.log(typeof(false - null));
// console.log(false - null + true);
// console.log([] + false - null);

// let y = 1;
// let x = y = 2;
// alert(x);

// console.log([] + 1 + 2);

// alert('1'[0]);
// alert("Og'abek"[0]);
// 
// console.log(2 && 1 && null && 0 && undefined);


// console.log(!!(1 && 2));
// console.log(Boolean(1 && 2));
// console.log(1 && 2);
// console.log(!!(1 && 2) === (1 && 1));
// console.log((1 && 2) !== (1 && 1));

// alert(null || 2 && 3 || 4)

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a === b);


// alert(+"Infinity")
// console.log(typeof(+"Infinity"));

// console.log('Ёжык' > "яблоко");
// console.log("яблоко" > "яблоко");
// console.log("яблоко" == "яблоко");

// console.log(0 || "" || 2 || undefined || true || false);


/////////////
true

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     // Нам просто нужно менять весь массив данных,
//     // а не лезть напрямую менять каждого из сотрудников
//     // Так как это верхний уровень объекта, то значение 
//     // будет меняться только у копии
//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// // console.log(restorantData);
// console.log(transferWaitors(restorantData));






/////////////////////
false
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: true
};

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return anwser;
// }

// console.log(isOpen(openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price) < average) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors[0] = { name: 'Mike', age: 32 };
//     return copy;
// }

// transferWaitors(restorantData);





  






























