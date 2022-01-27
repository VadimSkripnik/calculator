"use strict";

const oneValue = document.querySelector("#oneValue"),
    towValue = document.querySelector("#towValue"),
    freeValue = document.querySelector("#freeValue"),
    foreValue = document.querySelector("#foreValue");

foreValue.addEventListener("click", function () {
    let a = JSON.parse(oneValue.value);
    let b = JSON.parse(towValue.value);
    let operation = freeValue;

    if (operation.value === "+") {
        console.log(a + b);
    } else if (operation.value === "-") {
        console.log(a - b);
    } else if (operation.value === "*") {
        console.log(a * b);
    } else if (operation.value === "/") {
        console.log(a / b);
    }
});

console.log('Test2')