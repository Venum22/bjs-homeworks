//String.prototype.isPalindrome - для задачи №1
function getAnimalSound(animal) {
    if (animal === undefined)
        return null;
    const sound = animal.sound;    
    return sound;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (marks.length == 0)
        return 0;
    const average = marks.reduce(reducer) / marks.length;
    const roundAverage = Math.round(average);    
    return roundAverage;
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    const now = +new Date();
    const diff = now - +new Date(birthday);
    let age = diff / 365.25 / 24 / 60 / 60 / 1000;
    if (age > 18)
        return true;
    return false;    
    // return verdict
}