const submit = document.querySelector('#applyBtn') as HTMLButtonElement,
      result = document.querySelector('#result') as HTMLDivElement,
      selector = document.querySelector('#colorSelect') as HTMLSelectElement,
      hobby = document.querySelector('#text') as HTMLInputElement,
      experience = document.querySelector('#number') as HTMLInputElement;

enum Colors {
    White = "white",
    LightBlue = "lightblue",
    LightGreen = "lightgreen"
}

for (const key in Colors) {
    const value = Colors[key as keyof typeof Colors];
    const option: HTMLOptionElement = document.createElement('option');
    option.value = value;
    option.textContent = `${key}`;
    selector.appendChild(option);
}

type Person = {
    name: string,
    age: number,
}

const persons: Person[] = [
    { name: 'John', age: 22 },
    { name: 'Jane', age: 12 },
    { name: 'Jame', age: 30 }
];

function sayHi(person: Person): string {
    return `Привіт ${person.name}! Тобі ${person.age}`
};

submit.addEventListener('click', () => {
    const expValue: number = Number(experience.value);
    const hobbyValue: string = String(hobby.value);
    let experienceMessage: string;

    if(expValue > 5) {
        experienceMessage = `Вау, ти справжній експерт у хобі ${hobbyValue}!`
    } else if (expValue >= 1 && expValue <= 5){
        experienceMessage = `Чудово, ти вже маєш досвід у хобі ${hobbyValue}.`
    } else {
        experienceMessage = `Все попереду! Починати нове хобі — це цікаво.`;
    }
    result.textContent = `${sayHi(persons[0])}, ${experienceMessage}`;
    
    const selectedColor = selector.value as Colors;

    document.body.style.backgroundColor = selectedColor;
});