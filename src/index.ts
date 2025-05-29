// const firstName: string = 'Artem';
// const lastName: string = 'Iliev';
// console.log(`${firstName} ${lastName}`);
// for(let i = 0; i < 10; i++){
//     if(i % 2 === 0){
//         console.log(`Парні числа з циклу for - ${i}`);
//     }
// };

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
