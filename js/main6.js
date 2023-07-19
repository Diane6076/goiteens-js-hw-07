//6
document.addEventListener('DOMContentLoaded', function () {
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculatesButton = document.getElementById('calculatesButton');
const resultNum = document.getElementById('resultNum');
    
calculatesButton.addEventListener('click', function () {
const num1 = parseFloat(num1Input.value);
const num2 = parseFloat(num2Input.value);
const operation = operationSelect.value;
    
if (isNaN(num1) || isNaN(num2)) {
        resultNum.textContent = 'Будь ласка, введіть числа в обидва поля.';
} else {
let result;
 switch (operation) {
    case '+':
    result = num1 + num2;
        break;
    case '-':
    result = num1 - num2;
        break;
    case '*':
    result = num1 * num2;
        break;
    case '/':
if (num2 === 0) {
resultNum.textContent = 'Помилка: Ділення на нуль неможливе.';
    return;
}
result = num1 / num2;
     break;
     default:
resultNum.textContent = 'Виберіть операцію зі списку.';
    return;
}
resultNum.textContent = `Результат: ${result}`;
}
});
});
    