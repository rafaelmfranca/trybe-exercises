const inputList = document.querySelectorAll('input[type="text"]');

const preferences = {
    bgColor: '',
    textColor: '',
    fontSize: '',
    lineHeight: '',
    fontFamily: ''
};

function addInputListeners() {
    inputList.forEach((input) => {
        input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                const e = event.target;
                preferences[e.id] = e.value;
                addPreferencesToLocalStorage();
            };
        });
    });
};

function addPreferencesToLocalStorage() {
    const oldPreferences = JSON.parse(localStorage.getItem('preferences'))
    localStorage.setItem('preferences', JSON.stringify(preferences));
    addPreferencesInDOM();
}

function initialRenderization() {
    if (!localStorage.getItem('preferences')) localStorage.setItem('preferences', JSON.stringify(preferences));
};

addInputListeners();

window.onload = () => { initialRenderization(); };