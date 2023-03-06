let checkLogin = prompt("Кто там?")

if (checkLogin == "Админ") {
    let checkPassword = prompt("Пароль?")

    if (checkPassword == "Я главный") {
        alert("Здравствуйте!")
    } else if (checkPassword == "" || checkPassword === null) {
        alert("Отменено")
    } else {
        alert("Неверный пароль")
    }

} else if (checkLogin == "" || checkLogin === null) {
    alert("Отменено")
} else {
    alert("Я вас не знаю")
}