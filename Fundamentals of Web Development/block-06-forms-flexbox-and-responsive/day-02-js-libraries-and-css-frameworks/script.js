const selectOptions = document.querySelector('#states');
const previewButton = document.querySelector('#preview');
const clearButton = document.querySelector('#clear');
const fieldsList = document.querySelectorAll('[required]');
const form = document.querySelector('.js-form')

states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

states.forEach((state) => {
    const stateOption = `<option value="${state.toLowerCase()}">${state}</option>`;
    selectOptions.insertAdjacentHTML('beforeend', stateOption);
});

const picker = new Pikaday({ 
    field: document.querySelector('#initial-date'),
    format: 'D/MM/YYYY',
    toString (date) {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse (dateString) {
        const splitted = dateString.split('/');
        const day = parseInt(splitted[0], 10);
        const month = parseInt(splitted[1], 10);
        const year = parseInt(splitted[2], 10);
        return new Date(day, month, year);
    }
});

clearButton.addEventListener('click', () => { fieldsList.forEach((field) => field.value = ''); });


