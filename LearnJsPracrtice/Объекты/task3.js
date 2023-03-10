let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    if (typeof salaries[key] === "number") {
        sum += salaries[key]
    }
}

alert(sum)