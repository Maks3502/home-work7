let ua = "ukranian";
let en = "english";
let fr = "french";
let lang = "ukranian";

switch (lang) {
    case "en":
        lang = "english";
        alert("May")
        break;
    case "ua":
        lang = "ukranian";
        alert("Травень")
        break;
    case "fr":
        lang = "french";
        alert("Peut")
        break;
    default:

}

// завдання 2
let cafe = "кофе";
let juice = "сік";
let tea = "чай";
let drink = "сік";

switch (drink) {
    case cafe:
        confirm("Хочете кофе")
        break;
    case juice:
        confirm("Хочете сік")
        break;
    case tea:
        confirm("Хочете чай")
        break;
    default:
        alert("нажаль быльши неможу вам нічого запронувати")

}
// Завдання 3
let data = prompt("Який сьогодні день?")

switch (data) {
    case "понеділок":
    case "вторник":
    case "среда":
    case "четверг":
    case "пятниця":
        alert("робочий день")
        break;
    case "субота":
    case "воскресенья":
        alert("виходной день")
        break;
        default:
            alert("Error")

}

let month = prompt("Який сьогодни місяць?")

switch(month){
    case"Грудень":
    case"січень":
    case"лютий":
    alert("Зима")
    break;
    case"березень":
    case"квітень":
    case"травень":
    alert("Весна")
    break;
    case"червень":
    case"липень":
    case"серпень":
    alert("Лето")
    break;
    case"сентяберь":
    case"октяберь":
    case"ноябрь":
    alert("Осень");
    break;
    default:
        alert("нажель ми неможемо вам допомогти");
}
// завдання 7
for (let i = 12; i <= 27; i += 1) {
    console.log(i);
  }
//   завдання 11
for (let i = 0; i <= 5; i += 1) {
    console.log(i);
  }
  let counter = 0;

while (counter < 5) {
  counter += 1;
  console.log(counter)
}

// завдання 7
const min = 2;
  const max = 10;
  let total = 0;
for (let i = min; i < max; i += 1) {
  if(i % 3 === 0){
total += i;
  }
  console.log(total);
}

// завдання 5
const minn = 1;
const maxx = 10;
for (let i = minn; i < maxx; i += 1){
    console.log(`Число ${i} * 7 = ${i * 7}`)
}

// завдання 9
const miin = 9;
const maax = 31;
for(let i = miin; i < maax; i += 1){
    if(i === 15){
        continue;
    }
    console.log(i);
}

// завдання 8

const miinn = 0;
const maaxx = 101;
for(let i = miinn; i < maaxx; i += 1){
    if(i === 49){
        console.log(i);
        break;
        
    }
    else{
        continue;
    }
    
}


// завдання 10 
const minPrice = 500;
const maxPrice = 5000;
const goods = 50;
let totalPrice = 0;

for(let i = 1; i <= goods ; i++) {
let price = (Math.random() * (maxPrice - minPrice) + minPrice)
price = Number(price.toFixed(2))

totalPrice = price + totalPrice;
console.log(totalPrice.toFixed(0))

}

// завдання 12
let money;

do {
  number = prompt("Введіть число більше 200:", "");
} while (money <= 200 && money !== null);

console.log(`Ви ввели число: ${money}`);