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
function createCalendarDay() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const holiday = [24, 25, 31];
    const friday = [4, 11, 18, 25];
    for (const day of dezDaysList) {
        const dayLi = document.createElement('li');
        if (holiday.includes(day)) dayLi.classList.add('holiday');
        if (friday.includes(day)) dayLi.classList.add('friday');
        dayLi.classList.add('day');
        dayLi.innerHTML = day;
        daysUl.appendChild(dayLi);
    };
};

const daysUl = document.getElementById('days');
createCalendarDay();

// Exercício 2
function createButton(str) {
    const btn = document.createElement('button');
    btn.innerHTML = str;
    return btn;
};

const btnsContainer = document.querySelector('.buttons-container');
const holidayBtn = createButton('Feriados');
holidayBtn.id = 'btn-holiday';
btnsContainer.appendChild(holidayBtn);

// Exercício 3
let clickedHoliday = false;

holidayBtn.addEventListener('click', () => {
    clickedHoliday = !clickedHoliday;
    const holidays = document.querySelectorAll('.holiday');
    for (const day of holidays) clickedHoliday ? day.style.backgroundColor = 'white' : day.style.backgroundColor = 'rgb(238,238,238)';
});

// Exercício 4
const fridayBtn = createButton('Sexta-feira');
fridayBtn.id = 'btn-friday';
btnsContainer.appendChild(fridayBtn);

// Exercício 5
let clickedFriday = false;

fridayBtn.addEventListener('click', () => {
    clickedFriday = !clickedFriday;
    const friday = document.querySelectorAll('.friday');
    for (const day of friday) clickedFriday ? day.style.fontWeight = 'bold' : day.style.fontWeight = 'normal';
});

// Exercício 6
const zoomIn = (event) => event.target.style.fontSize = 25 + 'px';
const zoomOut = (event) => event.target.style.fontSize = 20 + 'px';
daysUl.addEventListener('mouseover', zoomIn);
daysUl.addEventListener('mouseout', zoomOut);

// Exercício 7
function createTask(task) {
    const taskElement = document.createElement('span');
    taskElement.innerHTML = task;
    myTasks.appendChild(taskElement);
};

const myTasks = document.querySelector('.my-tasks');
createTask('Projeto');

// Exercício 8
function addTaskColor(color) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.style.backgroundColor = color;
    myTasks.appendChild(task);
};

addTaskColor('green');
// Exercício 9
function setTaskClass() {
    myTasks.lastChild.addEventListener('click', (event) => {
        const e = event.target;
        e.classList.contains('selected') ? e.classList.remove('selected') : e.classList.add('selected');
    });
};

setTaskClass();

// Exercício 10
function setDayColor() {
    const daysLi = document.querySelectorAll('.day');
    daysLi.forEach((day) => {
        day.addEventListener('click', (event) => {
            const e = event.target
            e.style.color !== 'green' ? e.style.color = 'green' : e.style.color = 'rgb(119,119,119)';
        });
    });
};

setDayColor();

// Exercício Bônus