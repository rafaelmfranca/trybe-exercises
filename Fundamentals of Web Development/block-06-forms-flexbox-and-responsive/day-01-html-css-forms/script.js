const selectOptions = document.querySelector('#states');
states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
]

states.forEach((state) => {
    const stateOption = `<option value="${state.toLowerCase()}">${state}</option>`;
    selectOptions.insertAdjacentHTML('beforeend', stateOption);
});

