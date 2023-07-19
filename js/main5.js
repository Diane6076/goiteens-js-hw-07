//5
document.addEventListener('DOMContentLoaded', function () {
const colorInput = document.getElementById('colorInput');
const colorButton = document.getElementById('colorButton');
const messageColor = document.getElementById('messageColor');
    
colorButton.addEventListener('click', function () {
const inputColor = colorInput.value.trim().toLowerCase();
    
switch (inputColor) {
 case 'червоний':
    messageColor.textContent = 'Стоп!';
    break;
 case 'зелений':
    messageColor.textContent = 'Йти!';
    break;
 case 'жовтий':
    messageColor.textContent = 'Чекати!';
    break;
        default:
    messageColor.textContent = 'Некоректний колір. Спробуйте ще раз.';
    break;
}
});
});