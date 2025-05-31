const submit = document.querySelector('#applyBtn'), result = document.querySelector('#result'), selector = document.querySelector('#colorSelect'), hobby = document.querySelector('#text'), experience = document.querySelector('#number');
var Colors;
(function (Colors) {
    Colors["White"] = "white";
    Colors["LightBlue"] = "lightblue";
    Colors["LightGreen"] = "lightgreen";
})(Colors || (Colors = {}));
for (const key in Colors) {
    const value = Colors[key];
    const option = document.createElement('option');
    option.value = value;
    option.textContent = `${key}`;
    selector.appendChild(option);
}
const persons = [
    { name: 'John', age: 22 },
    { name: 'Jane', age: 12 },
    { name: 'Jame', age: 30 }
];
function sayHi(person) {
    return `Привіт ${person.name}! Тобі ${person.age}`;
}
;
submit.addEventListener('click', () => {
    const expValue = Number(experience.value);
    const hobbyValue = String(hobby.value);
    let experienceMessage;
    if (expValue > 5) {
        experienceMessage = `Вау, ти справжній експерт у хобі ${hobbyValue}!`;
    }
    else if (expValue >= 1 && expValue <= 5) {
        experienceMessage = `Чудово, ти вже маєш досвід у хобі ${hobbyValue}.`;
    }
    else {
        experienceMessage = `Все попереду! Починати нове хобі — це цікаво.`;
    }
    result.textContent = `${sayHi(persons[0])}, ${experienceMessage}`;
    const selectedColor = selector.value;
    document.body.style.backgroundColor = selectedColor;
});
