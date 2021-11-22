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
        input.addEventListener('keyup', (event) => { if (event.key === 'Enter') addPreferencesToLocalStorage(event.target) });
    });
}

function addPreferencesToLocalStorage(target) {
    const oldPreferences = JSON.parse(localStorage.getItem('preferences'))
    const newPreferences = { ...oldPreferences, [target.id]: target.value };
    localStorage.setItem('preferences', JSON.stringify(newPreferences));
    addPreferencesInDOM();
};

function initialRenderization() {
    if (!localStorage.getItem('preferences')) localStorage.setItem('preferences', JSON.stringify(preferences));
};

addInputListeners();

window.onload = () => { initialRenderization(); };