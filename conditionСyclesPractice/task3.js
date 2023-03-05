'use strict';

// task 3

// Перебираем все числа от 2 до 100
for (let number = 2; number <= 100; number++) {
    let isPrime = true; // Флаг, который показывает, является ли число простым

    // Перебираем все числа от 2 до number-1
    for (let divisor = 2; divisor < number - 1; divisor++) {
        if (number % divisor == 0) { // Если number делится на divisor без остатка
            isPrime = false; // Число не является простым
        }
    }

    if (isPrime) { // Если число является простым
        console.log(number); // Выводим его на экран
    }
}