<b>Task1</b><br>
Напишите код, выполнив задание из каждого пункта отдельной строкой:<br>
<br>
Создайте пустой объект user.<br>
Добавьте свойство name со значением John.<br>
Добавьте свойство surname со значением Smith.<br>
Измените значение свойства name на Pete.<br>
Удалите свойство name из объекта.<br>

<hr>

<b>Task2</b><br>
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.<br>
<br>
Должно работать так:<br>
<br>
let schedule = {};<br>
<br>
alert( isEmpty(schedule) ); // true<br>
<br>
schedule["8:30"] = "get up";<br>
<br>
alert( isEmpty(schedule) ); // false<br>

<hr>

<b>Task3</b><br>
У нас есть объект, в котором хранятся зарплаты нашей команды:<br>
<br>
let salaries = {<br>
  John: 100,<br>
  Ann: 160,<br>
  Pete: 130<br>
}<br>
<br>
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.<br>
Если объект salaries пуст, то результат должен быть 0.<br>

<hr>

<b>Task4</b><br>
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.<br>
<br>
Например:<br>
<br>
// до вызова функции<br>
<br>
let menu = {<br>
  width: 200,<br>
  height: 300,<br>
  title: "My menu"<br>
};<br>
<br>
multiplyNumeric(menu);<br>
<br>
// после вызова функции<br>
<br>
menu = {<br>
  width: 400,<br>
  height: 600,<br>
  title: "My menu"<br>
};<br>
<br>
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.<br>
<br>
P.S. Используйте typeof для проверки, что значение свойства числовое.<br>