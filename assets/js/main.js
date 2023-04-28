// ---calculator---
let a = prompt("Ədəd daxil edin");
let b = prompt("Ədəd daxil edin");
let calc = prompt("Daxil et :{ plus(+) , minus(-) , multiplication(*) , addition(/)  }")

const calculation = (a, b, calc) => {
    if (calc == `+`) {
        deyer = Number(a) + Number(b);
    } else if (calc == `-`) {
        deyer = Number(a) - Number(b);
    } else if (calc == `*`) {
        deyer = a * b;
    } else if (calc == `/`) {
        deyer = a / b;
    } else { document.write("This is wrong!") }

    document.write(`Cavab: ${deyer}`)
}
calculation(a, b, calc);