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
//1
const numbers: number[] = [4, 2, 7, 1, 9, 5];
let maxNumber: number = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
};

//2
const numbers2: number[] = [10, 20, 30, 40, 50];
let sum: number = 0;

for (let num of numbers2) {
    sum += num;
};

const average: number = sum / numbers2.length;

//3
const numbers3: number[] = [10, -20, 30, -40, 50];
let firstNegative: number | undefined;

for (let num of numbers3) {
    if(num < 0) {
        firstNegative = num;
        break;  
    }
};

//4
type Item = {
    name: string;
    price: number;
};

const item: Item = { name: 'Футболка', price: 20 }

const discount: number = 10;
const discountAmount: number = (discount / 100) * item.price;
const totalCost: number = item.price - discountAmount;

//5
type Employee = {
    name: string;
    hourRate: number;
};

type Paycheck = {
    name: string;
    amount: number;
};

const employee: Employee = {
    name: 'John',
    hourRate: 10
};
const JohnAmount: number = employee.hourRate * 40;
const invoice: Paycheck = { name: employee.name, amount: JohnAmount };

//6
type Book = {
    title: string,
    author: string;
    price: number
};

const books: Book[] = [
    { title: 'Грокаємо алгоритми', author: 'Адіться Бхаргва', price: 25 },
    { title: 'Мова програмування C++', author: 'Б\'єрн Страуструп', price: 20 },
    { title: 'Гаррі Поттер і філософський камінь', author: 'Джоан Роулінг', price: 10 }
];

// for (let book of books) {
//     console.log(`Книга: ${book.title}, автор: ${book.author}, ціна: ${book.price}$`);
// };

//hw
type Student = {
    name: string;
    course: number;
    averageGrade: number;
};

const students: Student[] = [
    { name: 'John', course: 3, averageGrade: 4.8 },
    { name: 'Jane', course: 2, averageGrade: 4.2 },
    { name: 'Jame', course: 2, averageGrade: 5 }
];

let sumGrade: number = 0;

let GPA!: number;
let higherGrade: number = students[0].averageGrade;
let higherGradeStudent: Student | null = null;
for(let student of students) {
    sumGrade += student.averageGrade;
    
    if(higherGrade < student.averageGrade) {
        higherGrade = student.averageGrade;
        higherGradeStudent = student;
    }
}
GPA = sumGrade / students.length;

//Enums
enum AccessLevel {
    Guest = 'Гість',
    User = 'Користувач',
    Moderator = 'Модератор',
    Admin = 'Адміністратор'
}

const currentLevel: AccessLevel = AccessLevel.Moderator;

//Functions
//1
function calcRectangkeArea(length: number, width: number): number {
    return length * width;
}

//2
enum Role {
    Guest = 'Гість',
    User = 'Користувач',
    Admin = 'Адміністратор'
}

type User = {
    name: string,
    age: number,
    role: Role
}

function createUser(name: string, age: number, role: Role = Role.Guest): User {
    return {
        name,
        age,
        role
    }
}

const user1 = createUser('John', 22, Role.Admin);
const user2 = createUser('Jane', 30, Role.User);
const user3 = createUser('Jame', 44);

//3
function validatePassword(password: string, minLength?: number): boolean {
    if(minLength === undefined){
        minLength = 6;
    }

    return password.length >= minLength
}

//4
function calcAverage(...numbers: Array<number>): number {
    if(numbers.length === 0) {
        console.log('Список чисел порожній');
        return 0;
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
};

//hw
type Groсery = {
    name: string,
    price: number
}

function calcSumOfOrder(grocery: Array<Groсery>): number {
    if(grocery.length === 0) {
        console.log('Замовлення порожнє');
        return 0;
    }

    let total = 0;
    for (const product of grocery) {
        if(product.price <= 0){
            console.log(`Некоректна ціна продукту: "${product.name}"`);
            continue;
        }
        total += product.price;
    }
    return total;
};

const products: Array<Groсery> = [
    { name: 'Футболка', price: 25 },
    { name: 'Шорти', price: 30 },
    { name: 'Носки', price: -5 }
];

const orderTotal = calcSumOfOrder(products);
console.log(orderTotal);