'use sctrict';

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