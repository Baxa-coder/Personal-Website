// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
    
//     for (let i = 0; i < data.length; i++){
//         if(typeof(data[i]) === 'number'){
//             data[i] = data[i] * 2
//         }else if ((typeof(data[i]) === 'string')){
//             data[i] += ' - done!'
//         }
//     }
    
//     console.log(data);
// }

// secondTask()


// function thirdTask() {
//     //     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//         const data = [5, 10, 'Shopping', 20, 'Homework'];
//         const result = [];
    
//         // Пишем решение вот тут
//         for(let i = 1; i <= data.length; i++){
//             result[i - 1] = data[data.length - i];
//         }
//         // Не трогаем
//         return console.log(result);
//         // console.log(data[data.length - 1]);
//     }
    
    
    
//     thirdTask()

    
//     const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)




let lesson = "Alert, Prompt, Confirm & Условные операторы Else If"
// //* alert   => оповышение
// //* prompt  => asks a question or information from client
// //*            задаёт вопрос (диалог), можно сохранить как контейнер
// //* confirm => даёт выбор (да или нет)

// Функция alert позволяет вывести какую-либо информацию во всплывающем окне в браузере. К таким окнам нельзя добавить стили и разукрасить их. Такое всплывающее окно очень удобно, так как оно позволяет быстро и наглядно вывести нужную информацию для пользователя.
// if (условиеПервое == true) {

// Функция prompt выводит окно для ввода данных. Первым параметром она принимает сообщение, которое будет показано пользователю, а вторым - текст по умолчанию в поле ввода Второй параметр - не обязательный. В окошке что появится будет находится текстовое поле, и две кнопки - ОК, CANCEL.


// confirm. показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена. Возвращает true , если нажата OK, и false , если нажата кнопка «Отмена» или Esc с клавиатуры.

//     // код прочитается если условиеПервое окажется правдой
// } else if (условиеВторое == true) {
//     // ...
// } else if (условиеТретье == true) {
//     // ...
// } else {
//     // код прочитается если некакое условие не окажется правдой
// }

// let answer = prompt(`
//     Добро пожаловать в наш магазин! 
//     Что вы желаете?
// `);
// if (answer.includes("Snikers")) {
//     console.log("Окей, Snikers стоит $2.00");
// } 
// else if (answer.includes("Кола")) {
//     console.log("Окей, Кола стоит $1.00");
// } 
// else {
//     console.log("Такого товара нет в наличии");
// }


// const clientName = prompt("Enter your name please: ") 
// let order = prompt(`
//     What would you like to order?
//     Soups:
//         1. Куриный бульён из тараканов
//         2. Бобуиный бульён
//         3. Бульён из ...
//         4. Червяной лагман
//     Dishes:
//         1. Димлама из кракадила
//         2. Стейк из рук ...
//         3. Жаренный нос верблюда
//     Desert:
//         1. Тапки Мухаммада
//         2. Фирменное блюдо из Червей
//         3. Баранина ...
// `)
// if (order == "1" || order.includes("Куриный бульён из тараканов")) {
//     let trueOrFalse = confirm(`
//         Куриный бульён из тараканов закончился но есть из муровей. 
//         Принести?
//     `)
//     if (trueOrFalse == true) {
//         alert("Ваш Куриный бульён из муровей будет после 5 минут")
//     } else {
//         alert('Если не хотите то идите и ещте ....!')
//     }
// } 



// switch(условный_контейнер) {
//     case значение_контейнера:
//         // код прочитается если значение_контейнера == условный_контейнер
//         break;  // прерывает выполнение кода
// }

// let myName = "Alisher"
// switch (myName) {
//     case "Aziz":
//         console.log("Aziz")
//         break;
//     case "Alisher":
//         console.log("Hello Boss!")
//     default:
//         console.log("Default situation")
// }





// let answer = prompt(`
//     Добро пожаловать в наш магазин!
//     Что вы желаете?
// `);
// if (answer.includes("Snikers")) {
//     confirm("Окей, Snikers стоит $2.00");
// }
// else if (answer.includes("Cola")) {
//     confirm("Окей, Кола стоит $1.00");
// }
// else {
//     confirm("Такого товара нет в наличии");
// }




// let feedbackFromAlert = alert('hello this is alert()')
// console.log(feedbackFromAlert);
// let feedbackfromConfirm = confirm('are you old enough')
// console.log(feedbackfromConfirm);
// let feedbackFromPrompt = prompt('how old are you?', '')
// console.log(feedbackFromPrompt);
// console.log(18);
// console.log('test' - 123);
// console.log(`im am ${feedbackFromPrompt} years old`);







// const clientName = prompt("Enter your name please: ")
// let order = prompt(`
//     What would you like to order?
//     Soups:
//         1. Куриный бульён из тараканов
//         2. Бобуиный бульён
//         3. Бульён из ...
//         4. Червяной лагман
//     Dishes:
//         5. Димлама из кракадила
//         6. Стейк из рук ...
//         7. Жаренный нос верблюда
//     Desert:
//         8. Тапки Мухаммада
//         9. Фирменное блюдо из Червей
//         10. Баранина ...
// `)
// if (order == "1" || order.includes("Куриный бульён из тараканов")) {
//     let trueOrFalse = confirm(`
//         Куриный бульён из тараканов закончился но есть из муровей.
//         Принести?
//     `)
//     if (trueOrFalse == true) {
//         alert("Ваш Куриный бульён из муровей будет после 5 минут")
//     } else {
//         alert('Если не хотите то идите и ещте ....!')
//     }
// }
