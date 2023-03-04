'use strict';

// task 1

const isEven = 10;

if (isEven % 2 == 0) {
    console.log(true)
} else {
    console.log(false)
};



// task 2

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



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




// task 4

let sum = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;

    }
}

console.log(sum)



// task 5

let sumPrime = 0;
for (let i = 2; i < 1000; i++) {
    let isPrime = true;

    for (let j = 2; j < i - 1; j++) {
        if (i % j == 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        sumPrime += i

    }

}

console.log(sumPrime)