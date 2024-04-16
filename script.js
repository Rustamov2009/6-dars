
let firstNumber = parseFloat(prompt("Birinchi raqamni kiriting"));
let secondNumber = parseFloat(prompt("Ikkinchi raqamni kiriting"));


if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Iltimos, haqiqiy raqamlarni kiriting.");
} else {
    let operation = prompt("Amalni tanlang:\n1. qo'shish\n2. ayirish\n3. ko'paytirish\n4. bo'lish\nAmalni tanlang (1/2/3/4):");

    let result;
    switch (operation) {
        case "1":
            result = firstNumber + secondNumber;
            console.log(`${firstNumber} + ${secondNumber} = ${result}`);
            break;
        case "2":
            result = firstNumber - secondNumber;
            console.log(`${firstNumber} - ${secondNumber} = ${result}`);
            break;
        case "3":
            result = firstNumber * secondNumber;
            console.log(`${firstNumber} * ${secondNumber} = ${result}`);
            break;
        case "4":
            if (secondNumber === 0) {
                console.log("Nolga bo'lish mumkin emas.");
            } else {
                result = firstNumber / secondNumber;
                console.log(`${firstNumber} / ${secondNumber} = ${result}`);
            }
            break;
        default:
            console.log("Noto'g'ri amal tanlandi. Iltimos, 1, 2, 3 yoki 4 raqamini kiriting.");
            break;
    }
}