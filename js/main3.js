//3
document.addEventListener('DOMContentsLoadeds', function () {
const monthNames = [
    'січень', 'лютий', 'березень', 'квітень', 'травень', 'червень',
    'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'
];
    
const monthInputNumber = document.getElementById('monthInputNumber');
const buttonMonthNumber = document.getElementById('buttonMonthNumber');
const messageMonthNumber = document.getElementById('messageMonthNumber');
    
buttonMonthNumber.addEventListener('click', function () {
const inputMonth = parseInt(monthInputNumber.value);
    
if (isNaN(inputMonth) || inputMonth < 1 || inputMonth > 12) {
messageMonthNumber.textContent = 'Введіть коректний номер місяця (від 1 до 12).';} else {
const season = getSeason(inputMonth);
messageMonthNumber.textContent = `Місяць "${monthNames[inputMonth - 1]}" належить до пори року: ${season}.`;
}
});
    
function getSeason(month) {
     switch (month) {
        case 12:
        case 1:
        case 2:
           return 'зима';
        case 3:
        case 4:
        case 5:
           return 'весна';
        case 6:
        case 7:
        case 8:
            return 'літо';
        case 9:
        case 10:
        case 11:
          return 'осінь';
}}
});