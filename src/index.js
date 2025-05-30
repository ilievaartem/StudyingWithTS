const form = document.querySelector('#factorial-form'), stepsList = document.querySelector('#factorial-steps');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    stepsList.textContent = ' ';
    const numberInput = document.querySelector('#number');
    const number = Number(numberInput.value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
        const listItem = document.createElement('li');
        listItem.textContent = `${factorial}`;
        stepsList.appendChild(listItem);
    }
});
const ageForm = document.querySelector('#age-form'), response = document.querySelector('#message');
ageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name');
    const ageInput = document.querySelector('#age');
    const name = nameInput.value;
    const age = Number(ageInput.value);
    if (age >= 18) {
        response.textContent = `${name}, aлкоголь дозволений`;
    }
    else {
        response.textContent = `${name}, aлкоголь заборонений`;
    }
});
