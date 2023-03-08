function pow() {
    let x = prompt("x?")
    let n = prompt("n?")

    if (!n) {
        alert(`степень ${n} не поддерживается, введите натуральное число`)
    } else {
        alert(x **= Math.round(n))
    }

}

pow()
