function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holiday = [24, 25, 31];
const friday = [4, 11, 18, 25];
const daysUl = document.getElementById('days');

function createCalendarDay() {
    for (const day of dezDaysList) {
        const dayLi = document.createElement('li');
        if (holiday.includes(day)) dayLi.classList.add('holiday');
        if (friday.includes(day)) dayLi.classList.add('friday');
        dayLi.classList.add('day');
        dayLi.innerHTML = day;
        daysUl.appendChild(dayLi);
    };
};

createCalendarDay();

// Exercício 2
// Exercício 3
// Exercício 4
// Exercício 5
// Exercício 6
// Exercício 7
// Exercício 8
// Exercício 9
// Exercício 10
// Exercício Bônus