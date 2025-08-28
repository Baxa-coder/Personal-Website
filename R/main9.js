// const usdCurr = 20;
// const eurCurr = 32;
// const discount = 0.9;



// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';


//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`; 
//         }else {
//             str += `${num * 1}`;
//         }
//     }

//     return str;
// }
// console.log(getMathResult(10,5))


// let middle = str.length / 2
// console.log(str.slice(0, middle));



// console.log('test')



// let str3 = 'Hello world Baxtiyor'
// let replaceString2 = str3.replace(/world/gi, 'baxtiyor')
// console.log(replaceString2)



// let str4 = 'hello'
// let max = 10

// let strlength = str4.length
// let stars = max - strlength
// if (stars % 2 !== 0) {
//     stars += 1
//     max += 1
// }

// let devidedStars = perseInt(stars / 2 + strlength)
// let str4Padstart = str4.padStart(devidedStars, '*')
// let str4PadEnd = str4PadStart.padEnd(max, '*')


// console.log(str4PadEnd)









// !               RU: регулярное выражение
// *  /.../i           => insensitive
// !               RU: нечувствительный
// *  /.../g           => global
// !               RU: глобальный
// *  string           => text
// !               RU: текст
// *  length           => the length of the string (text)
// !               RU: длина строки (текста)
// *  slice()          => the special part of the string
// !               RU: специальная часть строки
// *  replace()        => replace the string with a new string
// !               RU: заменить строку на новую строку
// *                   can take a special regExp as an parameter
// !               RU: может принимать специальное регулярное выражение
// *  toUpperCase()
// *  toLowerCase()
// *  concat()         => merges two strings
// !                RU: объединяет две строки
// *  trim()           => removes whitespace in the beginning
// *                      and at the end of the string
// !                RU: удаляет пробелы в начале и в конце строки
// *  split()          => splits the text into many pieces
// !                RU: разделяет текст на множество частей
// *  padStart()       => if the resulting string does NOT reach a
// *                      given length we can fill it with a sybmol
// *                      at the start
// !                RU: если полученная строка НЕ достигает заданной
// !                   длины, мы можем заполнить ее символом в начале
// *  padEnd()         => if the resulting string does NOT reach a
// *                      given length we can fill it with a sybmol
// *                      at the end
// !                RU: если полученная строка НЕ достигает заданной
// !                     длины, мы можем заполнить ее символом в конце
// *  charAt()         => Returns the character at the specified index
// !                RU: Возвращает символ по указанному индексу
// *  indexOf()        => returns the index of the first
// *                         string or letter that it finds
// !                RU: возвращает индекс первой строки или буквы,
// !                      которую он находит
// *  lastIndexOf()    => returns the last index of the string
// !                RU: возвращает последний индекс строки
// *  search()         => returns the first expression that it finds
// !                RU: возвращает первое выражение, которое он находит
// *  match()          => returns the matched string (all
// *                         strings if we use /.../gi)
// !                RU: возвращает совпавшую строку (все строки, если
// !                      мы используем /.../gi)
// *  includes()       => returns true if the string is found
// !                RU: возвращает true, если строка найдена
// *  startsWith()     => checks if the string starts with ...
// !                RU: проверяет, начинается ли строка с ...
// *  endsWith()       => checks if the string ends with ...
// !                RU: проверяет, заканчивается ли строка на ...
// *  repeat()         => repeats the string number of times
// !                RU: повторяет строку определенное количество раз
// *  join()           => joins all elements of an array into a string
// !                RU: объединяет все элементы массива в строку




// let str = 'My Classworks'
// let replaceString2 = my str.slice( '-3')
// console.log('My Classworks')


// let str2 = 'Amazon'
// let replaceString2 = str.replace(e)
// console.log(replaceString2)


// let str4 = 'main'
// let max = 10

// console.log('***main***')



// let fullName = 'Raupov Bakhtiyor Bakhodurovichv '
// let splitedFullName = fullName.split('')
// console.log(splitedFullName)
// let firtName = splitedFullName[0]
// let lastName = splitedFullName[1].slice(0,1)
// let secondLastName = splitedFullName[0].slice(0,1)
// console.log(`${firtName} ${lastName}.${secondLastName}`);




// let str2 = ' hello world'
// let count = 3

// let middle = parseInt(str2.length / 2)
// let firsPart = str2.slice(middle)
// console.log(firsPart.repeat(count), secondPart.repeat(count));

let str2 = 'Test text Tumur Sometext'
let sybmol = '#'
let sliced = str2.sliced(0,1)
let sliced2 = str2.slice(1)
console.log(sliced2);

// console.log(sliced + sliced2.replace(/t/gi, symbol));

