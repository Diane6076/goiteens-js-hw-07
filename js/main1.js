//1
const inputSelect = document.querySelector('.title')
const select = document.querySelector("[name= 'select']")

select.addEventListener('change', handaleSectInput );

function  handaleSectInput () {
    console.log('clicks:>>>', select.value);

    switch (select.value) {
        case 'coffe':
            message = 'Ви обрали каву.';
            break;
        case 'tea':
            message = 'Ви обрали чай.';
            break;
        case 'juce':
            message = 'Ви обрали сік.';
            break;
        default:
            message = 'Виберіть напій зі списку.';
            break;
    }
};
// console.log(select);

