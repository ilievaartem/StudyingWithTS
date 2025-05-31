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
const students = [
    { name: 'John', course: 3, averageGrade: 4.8 },
    { name: 'Jane', course: 2, averageGrade: 4.2 },
    { name: 'Jame', course: 2, averageGrade: 5 }
];
let sumGrade = 0;
let GPA;
let higherGrade = students[0].averageGrade;
let higherGradeStudent = null;
for (let student of students) {
    sumGrade += student.averageGrade;
    if (higherGrade < student.averageGrade) {
        higherGrade = student.averageGrade;
        higherGradeStudent = student;
    }
}
GPA = sumGrade / students.length;
//Enums
var AccessLevel;
(function (AccessLevel) {
    AccessLevel["Guest"] = "\u0413\u0456\u0441\u0442\u044C";
    AccessLevel["User"] = "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447";
    AccessLevel["Moderator"] = "\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440";
    AccessLevel["Admin"] = "\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440";
})(AccessLevel || (AccessLevel = {}));
const currentLevel = AccessLevel.Moderator;
//Functions
//1
function calcRectangkeArea(length, width) {
    return length * width;
}
//2
var Role;
(function (Role) {
    Role["Guest"] = "\u0413\u0456\u0441\u0442\u044C";
    Role["User"] = "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447";
    Role["Admin"] = "\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440";
})(Role || (Role = {}));
function createUser(name, age, role = Role.Guest) {
    return {
        name,
        age,
        role
    };
}
const user1 = createUser('John', 22, Role.Admin);
const user2 = createUser('Jane', 30, Role.User);
const user3 = createUser('Jame', 44);
//3
function validatePassword(password, minLength) {
    if (minLength === undefined) {
        minLength = 6;
    }
    return password.length >= minLength;
}
//4
function calcAverage(...numbers) {
    if (numbers.length === 0) {
        console.log('Список чисел порожній');
        return 0;
    }
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}
;
function calcSumOfOrder(grocery) {
    if (grocery.length === 0) {
        console.log('Замовлення порожнє');
        return 0;
    }
    let total = 0;
    for (const product of grocery) {
        if (product.price <= 0) {
            console.log(`Некоректна ціна продукту: "${product.name}"`);
            continue;
        }
        total += product.price;
    }
    return total;
}
;
const products = [
    { name: 'Футболка', price: 25 },
    { name: 'Шорти', price: 30 },
    { name: 'Носки', price: -5 }
];
const orderTotal = calcSumOfOrder(products);
console.log(orderTotal);
