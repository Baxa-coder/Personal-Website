'use strict '

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x
//     }

//     return result;

// }
// console.log(pow(2, 4));

// function pow(x, n) {
//     debugger if (n === 1) {
//         return x; debugger
//     } else {
//         return x * pow(x, n - 1); debugger
//     }

// }

// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));



// function getTotalProgressByIteration(data) {
//         let total = 0;
//         let students = 0;

//         for (let course of Object.values(data)) {

//             if (Array.isArray(course)) {
//                 students += course.length

//                 for (let i = 0; i < course.length; i++) {
//                     total += course[i].progress
//                 }
//             }else{
//                 for (let subCourse of Object.values(course)){
//                     students += subCourse.length

//                     for (let i = 0; i < subCourse.length; i++) {
//                         total += subCourse[i].progress
//                     }
//                 }
//             }
//         }


//         return total / students
//     }

//     console.log(getTotalProgressByIteration(students));



// let students = {
//   js: [
//     {
//       name: 'John',
//       progress: 100,
//     }, {
//       name: "Ivan",
//       progress: 60,
//     }],
//   html: {
//     basic: [{
//       name: 'Peter',
//       progress: 20,
//     }, {
//       name: 'Ann',
//       progress: 18,
//     }],

//     pro: [{
//       name: 'Sam',
//       progress: 10,
//     }],

//     semi: {
//       students: [{
//         name: 'Test',
//         progress: 100
//       }],
//       semi2: {
//         students: [{
//           name: 'Test',
//           progress: 100
//         }]
//       }
//     }
//   }
// };





// function getTotalProgressByRecursion(data) {

//   if (Array.isArray(data)) {
//     let total = 0;

//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progress
//     }

//     return [total, data.length]
//   } else {
//     let total = [0, 0];

//     for (let subData of Object.values(data)) {
//       const subDataArr = getTotalProgressByRecursion(subData);
//       total[0] += subDataArr[0];
//       total[1] += subDataArr[1];
//     }

//     return total
//   }
// }

// const result = getTotalProgressByRecursion(students)

// console.log(result[0] / result[1]);



// Задание простое, но нужно понимать что такое факториал вообще.
// Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два",
//  и так далее до 1. Факториал n обозначается как n


// Сам же факториал с примерами выглядит вот так:

// n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула



//     function fibonacci(n) { debugger
//         if (n <= 1) {
//             return n;
//         } else {
//             return fibonacci(n - 1) + fibonacci(n - 2);
//         }
//     }

//     console.log(fibonacci(6)); //output 8


//     fibonacci(6) = fibonacci(5) + fibonacci(4)
//     fibonacci(5) = fibonacci(4) + fibonacci(3)
//     fibonacci(4) = fibonacci(3) + fibonacci(2)
//     fibonacci(3) = fibonacci(2) + fibonacci(1)
//     fibonacci(2) = fibonacci(1) + fibonacci(0)
//     fibonacci(1) = 1
//     fibonacci(0) = 0


//     fibonacci(1) = 1
//     fibonacci(0) = 0
//     fibonacci(2) = 1 + 0 = 1
//     fibonacci(3) = 1 + 1 = 2
//     fibonacci(4) = 2 + 1 = 3
//     fibonacci(5) = 3 + 2 = 5
//     fibonacci(6) = 5 + 3 = 8



//     function sumOfNumbers(n) {
//         if (n === 1) {
//           return 1;
//         } else {
//           return n + sumOfNumbers(n - 1);
//         }
//       }

//       console.log(sumOfNumbers(5));

//     // 5 + 4 + 3 + 2 + 1 + 0 = 15

// function arraySum(arr) {
//     if (arr.length === 0) {
//         return 0;
//     } else {
//         return arr[0] +
//             arraySum(arr.slice(1));
//     }
// }

// console.log(arraySum([1, 2, 3, 4, 5]));


// 1

function factorial(n) {
  // Проверка на число и на целое значение
  if (typeof n !== 'number' || !Number.isInteger(n)) {
      return 'Введите целое число.';
  }

  // Если число меньше или равно 0, возвращаем 1
  if (n <= 0) {
      return 1;
  }

  // Вычисление факториала через цикл 
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }

  return result;
}

// Примеры использования:
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
console.log(factorial(-3)); // 1
console.log(factorial(2.5)); // Введите целое число.
console.log(factorial('test')); // Введите целое число.


// factorial(5): Факториал 5 равен 5 * 4 * 3 * 2 * 1 = 120.
// factorial(4): Факториал 4 равен 4 * 3 * 2 * 1 = 24.
// factorial(3): Факториал 3 равен 3 * 2 * 1 = 6.
// factorial(0): Согласно определению, факториал 0 равен 1.
// factorial(-3): Поскольку входное значение меньше или равно нулю, функция возвращает 1.
// factorial(2.5) и factorial('test'): Поскольку ввод не является целым числом, функция возвращает сообщение "Введите целое число".










// 2

function sumNaturals(n) {
  // Проверка, если n меньше 1, возвращаем 0 (натуральные числа начинаются с 1)
  if (n < 1) {
    return 0;
  }

  // Базовый случай: если n равно 1, возвращаем 1
  if (n === 1) {
    return 1;
  }

  // Рекурсивный случай: возвращаем сумму n и результата вызова sumNaturals для n-1
  return n + sumNaturals(n - 1);
}

// Примеры использования:
console.log(sumNaturals(5)); // Вывод: 15 (1 + 2 + 3 + 4 + 5)
console.log(sumNaturals(10)); // Вывод: 55 (1 + 2 + ... + 10)
console.log(sumNaturals(1)); // Вывод: 1
console.log(sumNaturals(0)); // Вывод: 0
console.log(sumNaturals(-3)); // Вывод: 0


// Эта функция суммирует все натуральные числа от 1 до n с помощью рекурсии,
//  где каждый вызов функции уменьшает n на 1 до тех пор, пока не будет достигнут базовый случай,
//   где n равно 1. Результаты всех этих вызовов суммируются, чтобы получить окончательный результат.
