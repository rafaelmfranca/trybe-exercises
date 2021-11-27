const selectOptions = document.querySelector('#states');
const previewButton = document.querySelector('#preview');
const clearButton = document.querySelector('#clear');
const fieldsList = document.querySelectorAll('[required]');

states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

states.forEach((state) => {
    const stateOption = `<option value="${state.toLowerCase()}">${state}</option>`;
    selectOptions.insertAdjacentHTML('beforeend', stateOption);
});

// Just basic validation
function isValidDate() {
    const date = document.querySelector('#initial-date');
    const dateSplitted = date.value.split('/');
    const day = parseInt(dateSplitted[0], 10);
    const month = parseInt(dateSplitted[1], 10);
    const year = parseInt(dateSplitted[2], 10);

    if (day > 0 && day <= 31 && month > 0 && month <= 12 && year >= 0) return true;
    return false;
}

function areRequiredFieldsFilled() {
    let flag = true;
    fieldsList.forEach((field) => { if (field.value.length === 0) flag = false; });
    return flag;
}

previewButton.addEventListener('click', (event) => {
    event.preventDefault();
    const div = document.createElement('div');
    div.classList.add('container');
    if (areRequiredFieldsFilled()) {
        if (isValidDate()) {
            fieldsList.forEach((field) => {
                const p = `<p>${field.name.toUpperCase()}: ${field.value}</p>`;
                div.insertAdjacentHTML('beforeend', p);
            });
        }
        if (!isValidDate()) div.insertAdjacentHTML('beforeend', `<p>Date invalid!</p>`);
    } else div.insertAdjacentHTML('beforeend', `<p>Fill all the fields</p>`);

    document.body.appendChild(div);
});

clearButton.addEventListener('click', () => {
    document.body.removeChild(document.querySelector('div'));
    fieldsList.forEach((field) => field.value = '');
});


