function pow(x, n) {
    x = prompt("x?")
    n = prompt("n?")

    if (!Number.isInteger(Number(n)) || (x, n === null && x, n == "")) {
        alert(`Степень ${n} не поддерживается, введите натуральное число`)
    } else {
        alert(x **= n)
    }

}

pow()