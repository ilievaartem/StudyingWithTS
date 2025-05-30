const form = document.querySelector('#factorial-form') as HTMLFormElement,
      stepsList = document.querySelector('#factorial-steps') as HTMLOListElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    stepsList.textContent = ' ';

    const numberInput = document.querySelector('#number') as HTMLInputElement;
    const number: number = Number(numberInput.value);

    let factorial: number = 1;
    for(let i = 1; i <= number; i++) {
        factorial *= i;

        const listItem: HTMLLIElement = document.createElement('li');
        listItem.textContent = `${factorial}`;
        stepsList.appendChild(listItem);
    }
});

const ageForm = document.querySelector('#age-form') as HTMLFormElement,
      response = document.querySelector('#message') as HTMLDivElement;

ageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.querySelector('#name') as HTMLInputElement;
    const ageInput = document.querySelector('#age') as HTMLInputElement;
    const name: string = nameInput.value;
    const age: number = Number(ageInput.value);

    if(age >= 18) {
        response.textContent = `${name}, aлкоголь дозволений`;
    } else {
        response.textContent = `${name}, aлкоголь заборонений`;
    }
});