//  VARIABLES: GLOBAL AND LOCA SCOPE VARIABLE

// Global Variable

// let i;

//   for(i = 0; i < 5; i++){
//       let p = 10
//       console.log(i + p);
//   }

//   console.log(i)



// OERATOR AND EQUALIT

//  Arithmetica Operators
//  +, -, *, /, %, ==, ===, increment

// MINUS (-)

  let cost = 15
  let profit;
  let salesprice = 20

  profit = salesprice - cost;

  console.log(profit)

//   plus (+), for number

  let costs = 15, profits = 5, salesprices = cost + profit;

  console.log(salesprices) 

//   plus (+) : for strings

  let firstName = 'Olatunde', surname = 'Tobi ', fullName = surname + firstName;

  console.log(fullName + "" +" is a good boy")


  let firstNames = 'Olatunde', surnames = 'Tobi ', fullNames = surname + firstName;

  console.log(`${fullNames} +  is a good boy`)


//  Back. Tick (`number`)


 let food = 'Rice'
 console.log(`what will I eat, if not ${food}`);

// Trier
let person = {
    name: 'Bayo',
    age: 30
};

//Dot Notation
person.name = 'Hoye'

// Bracket Notation
person['name'] = 'Obe'

console.log(person.name)



//Array

let selectedColors = ['red', 'blue', 'White']

console.log(selectedColors.length)



let age = 20;
if(age >= 18) {
  console.log("Admission")
}else{
  console.log("No Admission")
}


const Num = [2, 3, 4, 5, 6, 7, 8]
console.log(Num)
let BayoNum = Num.map(double)
function double(value, index, Array){
  return value*2
};


let Hoyeeman = Num.map(multiply)
function multiply(value, index){
    return value*index
};


console.log(BayoNum)
console.log(Hoyeeman)
// function 

function greet(){
    console.log("Hello, Hoyeeman");
}

greet()


// parameters and Argument

function greeting(firstName, lastName){
         console.log("Hello " + firstName + " " + lastName)
}

greeting("Abdullahi", "Adebayo")

// Default parameter 

function sum(x, y){
  console.log(x+y);
}

sum(15,12)

function add(a,b){
  return a+b
}

let bola = add(15,40)
console.log(`The sum is ${bola}`)
console.log("The sum is " + bola)


// Example

function fn1(x){

  function fn2(y){
     return x * y
  }
    return fn2; 
}

 let Ayo = fn1(3)
 console.log(Ayo)

 console.log(Ayo(2)) 


 // if statement

 let country = "Nigeria";
 let aged = 20;
 if(age >= 18 && country == "Nigeria"){
    
  console.log("You can get a drivers license")
 }else{
    console.log("you can not get a driver license")
 }


// And Operator:

 let result;
 let agged = 21;
 if(agged > 20 && agged < 30){
    result = agged + 50;

 }
 else{
    result = agged
 }

 console.log(result)


 // OR OPERATOR

 let costt = 50;
 let sellprice;
 let profitt = 10;
 
 if(costt >= 50 || costt === 55){
     sellprice = costt + profitt
 }

 else {
  sellprice = costt
 }

 console.log(sellprice)

 // NOT OPERATOR

 let name = "Hayzed"

 if(name !== "Hayzed"){
   console.log("why are yuo lying")
 }

 else{
    console.log("That is good")
 }


//LOOP

// WHILE LOOP

let num = 5;
let i = 0;
while(i < num){
  i++
  console.log(i);
}


for(let i = 0; i < num;  i++){
 
  console.log(i)
}


// checking for a leap a year
// CONDITION:
// The year divided by 4 should have a remainder of 0
// The year divided by 100 should have a non-zero remainder
// if divided by 100 gives no remainder, then divided by 400
// should give no remainder

// onst year = prompt("Enter the year")

// const checkLeap = (year) =>{
//   let result;
//   if((year % 4 === 0 && year % 100 !==0) || (year % 4 ===0 && year % 100 === 0 && 400 !==0)){
//     result = "Yes! it is a leap year"
//   }

//   else{
//     result = "No! it is not a leap year"
//   }
//   return result
// }

// const answer = checkLeap(year)

// alert(answer)



// writing a program or a function that prints 1 - 100 and,  check and  print FIZZ , BUZZ and FIZZBUZZ for multiples of 3, 5 and (3 and 5)

let index;
let results = [];

const printNums = () => {
    for (index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 !== 0) {
        results.push("FIZZ");
    }
    else if (index % 5 === 0) {
        results.push("BUZZ");
    }
    else if (index % 3 === 0 && index % 5 === 0) {
        results.push("FIZZBUZZ");
    }
    else {
        results.push(index);
    }

}
 return results;
}

console.log(printNums());

//******* Ternary operator with Samples */

function canAccessPlatform(age) {
  const shouldAccess = age >= 18 ? true : false;

  return shouldAccess;
}



function checkEvenOrOdd(number) {
  const result = number % 2 === 0 ? "even" : "odd";
  return result;
}

console.log(checkEvenOrOdd(4));

console.log(checkEvenOrOdd(7));

// *** another example /*

function decideActivity(weather) {
  let activity;

  if (weather === "sunny") {
    activity = "go out";
  } else {
    activity = "stay in";
  }

  return activity
}


console.log(decideActivity("raining"));
console.log(decideActivity("snowing"));
console.log(decideActivity("sunny"));

// ***** another examples ///

function checkNumber(number) {
  let result;
  if (number > 0) {
    result = "positive";
  } else {
    result = "non-positive";
  }
  return result;
}
console.log(checkNumber(5)); 
console.log(checkNumber(-2));


// **** By using TERNARY OPERATOR example  //

function checkNumber(number) {
  const result = number > 0 ? "positive" : "non-positive";
  return result;
}

// Usage
console.log(checkNumber(5));
console.log(checkNumber(-2));

//****** another example */

function checkNumber(number) {
  let message;

  if (number > 0) {
    message = "Positive";
  } else if (number === 0) {
    message = "Zero";
  } else {
    message = "Negative";
  }

  return message;
}

console.log(checkNumber(5)); 
console.log(checkNumber(0));
console.log(checkNumber(-3));



// **** By using TERNARY OPERATOR example  //


function checkNumber(number) {
  return number > 0 ? "Positive" : number === 0 ? "Zero" : "Negative";
}

console.log(checkNumber(5));
console.log(checkNumber(0));
console.log(checkNumber(-3));


//******* Another Example under Conditional statement */

function getDrink(age) {
  return age >= 21
    ? "Enjoy a cocktail"
    : age >= 18
    ? "Have a beer"
    : age >= 16
    ? "Grab a soft drink"
    : "Sorry, you're too young to drink";
}

// Usage
console.log(getDrink(25)); 
console.log(getDrink(19)); 
console.log(getDrink(16)); 
console.log(getDrink(10)); 






