//4
document.addEventListener('DOMContentLoaded', function () {
const monthDays = [
            31, 28, 31, 30, 31, 30,
            31, 31, 30, 31, 30, 31
];
const dataInput = document.getElementById('dataInputt');
const dataButton = document.getElementById('dataButton');
const messageData = document.getElementById('messageData');
    
dataButton.addEventListener('click', function () {
const inputMonth = parseInt(dataInput.value);
    
 if (isNaN(inputMonth) || inputMonth < 1 || inputMonth > 12) {
    messageData.textContent = 'Введіть коректний номер місяця (від 1 до 12).';
} else {
const daysInMonth = getDaysInMonth(inputMonth);
    messageData.textContent = `У місяці "${getMonthName(inputMonth)}" ${daysInMonth} днів.`;
}
});
    
function getDaysInMonth(month) {
return monthDays[month - 1];
}
    
function getMonthName(month) {
const monthNames = [
 'січень', 'лютий', 'березень', 'квітень', 'травень', 'червень',
  'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень' ];
    
return monthNames[month - 1];
}
});