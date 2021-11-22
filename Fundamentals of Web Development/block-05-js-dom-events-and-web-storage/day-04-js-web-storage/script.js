const inputList = document.querySelectorAll('input[type="text"]');

const preferences = {
    backgroundColor: '',
    color: '',
    fontSize: '',
    lineHeight: '',
    fontFamily: ''
};

function addInputListeners() {
    inputList.forEach((input) => {
        input.addEventListener('keyup', (event) => { if (event.key === 'Enter') addPreferencesToLocalStorage(event.target) });
    });
};

function addPreferencesToLocalStorage(target) {
    const oldPreferences = JSON.parse(localStorage.getItem('preferences'));
    const newPreferences = { ...oldPreferences, [target.id]: target.value };
    localStorage.setItem('preferences', JSON.stringify(newPreferences));
    target.value = '';
    addPreferencesInDOM(newPreferences);
};

function addPreferencesInDOM(preferences) {
    const textContent = document.querySelector('#text-content');
    const contentStyle = textContent.style;
    if (preferences.backgroundColor) contentStyle.backgroundColor = preferences.backgroundColor;
    if (preferences.color) contentStyle.color = preferences.color;
    if (preferences.fontSize) contentStyle.fontSize = +preferences.fontSize + 'px';
    if (preferences.lineHeight) contentStyle.lineHeight = +preferences.lineHeight + 'px';
    if (preferences.fontFamily) contentStyle.fontFamily = preferences.fontFamily;
};

function initialRenderization() {
    if (!localStorage.getItem('preferences')) localStorage.setItem('preferences', JSON.stringify(preferences));
    else {
        const preferences = JSON.parse(localStorage.getItem('preferences'));
        addPreferencesInDOM(preferences);
    };
};

addInputListeners();

window.onload = () => { initialRenderization(); };