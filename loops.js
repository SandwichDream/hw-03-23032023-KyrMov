// let dis = [8,10,22,6,11,2,3];
// let dis1 = dis.sort().reverse().slice(0, 3);
// dis1.push(5, 3);
// console.log(dis1.join("-"));

// (1. The sum of consecutive numbers between the given numbers) використовуючи цикл виведіть суму чисел між  А і В з умовоб що A<B

console.log("1) The sum of consecutive numbers between the given numbers")

let A = Number(prompt("(1. The sum of consecutive numbers between the given numbers) Enter first number:"));
let B = Number(prompt("(1. The sum of consecutive numbers between the given numbers) Enter second number (greater than first):"));
let result = 0;
let text = "";

if(A < B){
    for(let i = B-A+1; i > 0; i--){
        text += i === 1 ? `${A}=` : `${A}+`;
        result+=A++;
    }
    console.log(text+result);
}
else{
    console.log("The entered information conflicts with the condition!!!");
}

// (2. Decline) зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)

console.log("2) Decline")

for(let i = Number(prompt("(2. Decline) Enter your number:")); i >= 0; i--){
    console.log(i);
}

// (3. Triangle) Реалізувати побудову трикутника за допмогою циклів
// * console.log(*)
// console.log("")
// **
// ***
// ****

console.log("3) Triangle")

let blocks = "";

for(let i = Number(prompt("(3. Triangle) Enter size of the triangle (number):")); i > 0; i--){
    console.log(blocks+="*");
}

// (4. Rectangle) реалізувати прямокутник з символів
// ****
// ****

console.log("4) Rectangle")

blocks = "";

for(let i = Number(prompt("(4. Rectangle) Enter 1st side of the rectangle (number):")); i > 0; i--){
    blocks+="*";
}
let im = Number(prompt("(4. Rectangle) Enter 2nd size of the rectangle (number):"));
let evenIm = im%2 === 0 ? true : false;

if(evenIm === true){                            //===================================\\
    for(let i = im/2; i > 0; i--){              //                                   \\
        console.log(blocks);                    //   Ці умови задані, щоб бачити     \\
        console.log(blocks+" ");                //      результати у Хромі!!!        \\
    }                                           //                                   \\
}                                               //===================================\\
else{
    for(let i = (im-1)/2; i > 0; i--){
        console.log(blocks);
        console.log(blocks+" ");
    }
    console.log(blocks);
}

// (5. Days checker) Створити prompt  який питає день, якщдо це ВТ чи Чт то вивести у вас сьогодні заняття, у вас сьогодні вільний день

console.log("5) Days checker")

let day = String(prompt("(5. Days checker) What day is it today?:"))

switch(day){
    case "ПН":
    case "Пн":
    case "пн":
    case "Понеділок":
    case "понеділок":
    case "СР":
    case "Ср":
    case "ср":
    case "Середа":
    case "середа":
    case "ПТ":
    case "Пт":
    case "пт":
    case "П'ятниця":
    case "п'ятниця":
    case "СБ":
    case "Сб":
    case "сб":
    case "Субота":
    case "субота":
    case "НД":
    case "Нд":
    case "нд":
    case "Неділя":
    case "неділя":
        console.log("Відпочивай");
        break;
    case "ВТ":
    case "Вт":
    case "вт":
    case "Вівторок":
    case "вівторок":
    case "ЧТ":
    case "Чт":
    case "чт":
    case "Четвер":
    case "четвер":
        console.log("Сьогодні будь готовий до завдань!");
        break;
    case "MON": // Eng
    case "MO":
    case "Mon":
    case "Mo":
    case "mon":
    case "mo":
    case "Monday":
    case "monday":
    case "WED":
    case "WE":
    case "Wed":
    case "We":
    case "wed":
    case "we":
    case "Wednesday":
    case "wednesday":
    case "FRI":
    case "FR":
    case "Fri":
    case "Fr":
    case "fri":
    case "fr":
    case "Friday":
    case "friday":
    case "SAT":
    case "SA":
    case "Sat":
    case "Sa":
    case "sat":
    case "sa":
    case "Saturday":
    case "saturday":
    case "SUN":
    case "SU":
    case "Sun":
    case "Su":
    case "sun":
    case "su":
    case "Sunday":
    case "sunday":
        console.log("You are free");
        break;
    case "TUE":
    case "TU":
    case "Tue":
    case "Tu":
    case "tue":
    case "tu":
    case "Tuesday":
    case "tuesday":
    case "THU":
    case "TH":
    case "Thu":
    case "Th":
    case "thu":
    case "th":
    case "Thursday":
    case "thursday":
        console.log("Get ready for the next lesson!");
        break;
    default:
        console.log("Цікавий день");
}

// (6. Planet checker) Створити prompt  який питає назву планети і вивести інформацію чи вона знаходиться в сонячній системі

console.log("6) Planet checker")

let planet = String(prompt("(6. Planet checker) Enter a planet:"))

switch(planet){
    case "Меркурій":
    case "Венера":
    case "Земля":
    case "Марс":
    case "Юпітер":
    case "Сатурн":
    case "Уран":
    case "Нептун":
    case "Плутон":
        console.log("Планета сонячної системи");
    case "Mercury": // Eng
    case "Venus":
    case "Earth":
    case "Mars":
    case "Jupiter":
    case "Saturn":
    case "Uranus":
    case "Neptune":
    case "Pluto":
        console.log("Planet of the solar system");
    default:
        console.log("Цікава планета");
}

// (7. Smiles) let smile = [':)', '=)',':)', '=)',':)', '=)']; Перебрати цей массив і замінити смайли =) на ;) після чого вивести в консоль новий массив

console.log("7) Smiles")

let smile = [':)', '=)',':)', '=)',':)', '=)'];

console.log(`Before: ${smile}`);

for(let i = 0; i < smile.length; i++){
    smile[i] = smile[i] === "=)" ? ";)" : smile[i];
}

console.log(`After: ${smile}`);