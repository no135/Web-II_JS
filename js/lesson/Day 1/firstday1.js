console.log("Hello World");
let name="John";
console.log(name); // John
let num1=5;
let num2=5.0;
console.log(num1==num2); // true
console.log(num1===num2); // true
let x=7;
console.log(x); // 7
const y=8;
console.log(y); // 8
var z=9;
console.log(z); // 9
let randomNum = Math.random()*80
roundNum = Math.round(randomNum)
console.log(roundNum); // random number between 0 and 80
console.log(randomNum); // random number between 0 and 1

const now=new Date();
console.log(now); // current date and time
if (now.getHours() < 12) {
    console.log("Good Morning"); // Good Morning
}
else if (now.getHours() < 18) {
    console.log("Good Afternoon"); // Good Afternoon
}
else {
    console.log("Good Evening"); // Good Evening
}

const arr=Array();
console.log(arr); // empty array





const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
