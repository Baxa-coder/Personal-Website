////1

function fibonacci(n) {

    if (n === 0) {
      return 0;  // Базовый случай: F(0) = 0
    } else if (n === 1) {
      return 1;  // Базовый случай: F(1) = 1
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);  // Рекурсивный случай: F(n) = F(n-1) + F(n-2)
    }
  }
  
  // Примеры использования:
  console.log(fibonacci(5));  // Вывод: 5
  console.log(fibonacci(8));  // Вывод: 21

  


////2
  function countProperties(obj) {
    let count = 0;  // Инициализация переменной для хранения количества свойств
    for (let key in obj) {  // Используем цикл for...in для итерации по всем свойствам объекта
      count++;  // Увеличиваем счётчик на каждое свойство
    }
    return count;  // Возвращаем итоговое количество свойств
  }
  
  // Примеры использования:
  console.log(countProperties({a: 1, b: 2, c: 3}));  // Вывод: 3
  console.log(countProperties({name: 'Alice', age: 25}));  // Вывод: 2

  
///3
  function printArrayElements(arr) {
    arr.forEach(function(element) {  // Используем метод forEach для итерации по элементам массива
      console.log(element);  // Выводим каждый элемент массива в консоль
    });
  }
  
  // Примеры использования:
  printArrayElements(['apple', 'banana', 'cherry']);
  // Вывод:
  // apple
  // banana
  // cherry

  

//// 4
  function sumArray(arr) {
    let sum = 0;  // Инициализация переменной для хранения суммы элементов
    for (let num of arr) {  // Используем цикл for...of для итерации по элементам массива
      sum += num;  // Добавляем текущий элемент к сумме
    }
    return sum;  // Возвращаем итоговую сумму
  }
  
  // Примеры использования:
  console.log(sumArray([1, 2, 3, 4, 5]));  // Вывод: 15
  console.log(sumArray([-1, 0, 1]));       // Вывод: 0
   