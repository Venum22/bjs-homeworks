
'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let check = {'Процентная ставка': percent, 'Начальный взнос': contribution, 'Общая стоимость': amount};
    for (let key in check) {
        if (isNaN(check[key]))
            return `Параметр ${key} содержит неправильное значение ${check[key]}`;
    }

    let month = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();
    let percentPerMonth = percent / 100 / 12;
    let payment = (amount - contribution) * (percentPerMonth + percentPerMonth /(Math.pow(1 + percentPerMonth, month) - 1));
    let totalAmount = parseFloat((payment * month).toFixed(2));
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting = '';
    if (typeof name === 'string' && name.length > 0) {
        greeting = `Привет, мир! Меня зовут ${name}`;
    }
    else {
        greeting = `Привет, мир! Меня зовут Аноним`;
    }
    console.log(greeting);
    return greeting;
}