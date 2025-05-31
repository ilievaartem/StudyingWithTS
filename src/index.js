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
//1
const numbers = [4, 2, 7, 1, 9, 5];
let maxNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
;
//2
const numbers2 = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers2) {
    sum += num;
}
;
const average = sum / numbers2.length;
//3
const numbers3 = [10, -20, 30, -40, 50];
let firstNegative;
for (let num of numbers3) {
    if (num < 0) {
        firstNegative = num;
        break;
    }
}
;
const item = { name: 'Футболка', price: 20 };
const discount = 10;
const discountAmount = (discount / 100) * item.price;
const totalCost = item.price - discountAmount;
const employee = {
    name: 'John',
    hourRate: 10
};
const JohnAmount = employee.hourRate * 40;
const invoice = { name: employee.name, amount: JohnAmount };
const books = [
    { title: 'Грокаємо алгоритми', author: 'Адіться Бхаргва', price: 25 },
    { title: 'Мова програмування C++', author: 'Б\'єрн Страуструп', price: 20 },
    { title: 'Гаррі Поттер і філософський камінь', author: 'Джоан Роулінг', price: 10 }
];
for (let book of books) {
    console.log(`Книга: ${book.title}, автор: ${book.author}, ціна: ${book.price}$`);
}
;
