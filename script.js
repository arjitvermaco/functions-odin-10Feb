'use strict';
//Default Parameters

const ticketsBooked = [];

const bookTicket = (trainNumber,noOfTickets=1,price = 399 * noOfTickets) => {
    const ticket = {
        noOfTickets,
        trainNumber,
        price
    }
    ticketsBooked.push(ticket);
    return ticket;
}

bookTicket('LR123');
bookTicket('LR123',4);
bookTicket('LR873',3,900);
bookTicket('NR232',undefined,400)

console.log(ticketsBooked)

//How passing arguments work : Value or Reference
// String.
// Number.
// Boolean.
// Undefined.
// Null.
// Symbol.


let trainNo = 'LR123';

let passenger = {
    fullName : "Arjit Verma",
    idNo : 1234567890,
}

const checkIn = (train,passengerDetails) => {
    train = 'NR232';

    passengerDetails.fullName = "Mr "+ passengerDetails.fullName;

    console.log(train,passengerDetails);
}

checkIn(trainNo,passenger);
//train = trainNo
//passengerDetails = passenger

console.log(trainNo);
console.log(passenger);

//Callback Functions

// addEventListener need two things
// what event to track
// and what to do when event occurs (function)

document.getElementById('btn').addEventListener('click',function(){
    console.log('Button clicked');
})

// function greet(name){
//     console.log('Hello '+name);
// }

// function getUserName(greetUser){
//     const name = prompt('Enter your name');
//     console.log(name);
//     greetUser(name)
// }

// getUserName(greet)

//HOF -> Higher Order Functions 
// 1. It can take a function as an argument.
// 2. It can return a function as a result.

function multiplyBy(num){
    return function(x){
        return x*num
    }
}
const multiplyByFive = multiplyBy(5);
const multiplyByTen = multiplyBy(10);

// function multiplyByFive(x){
//     return x*5
// }

console.log(multiplyByFive(100));
console.log(multiplyByTen(56));

//Production use case

//Create a higher order function to get discounts on product price

function applyDiscount(discount){
    return function(price){
        return price - (price * discount)/100
    }
}

const discount10 = applyDiscount(10);
const discount40 = applyDiscount(40);
const discount30 = applyDiscount(30);

console.log(discount10(1000));
console.log(discount40(1000));
console.log(discount30(3000));


//Call, bind and apply


const vistara = {
    name : 'Vistara',
    price : 2000,
    iataCode: 'VRA',
    bookings:[],
    bookTicket : function(flightNo,name){
        console.log('Ticket booked for '+name+' on flight '+flightNo+' for '+this.name+' at '+this.iataCode);
        this.bookings.push({flightNo,name});
    }
}

vistara.bookTicket('AA123','Arjit');
vistara.bookTicket('BB123','Bharat');
console.log(vistara.bookings);


const airIndia = {
    name : 'AirIndia',
    price : 1000,
    iataCode: 'AI',
    bookings:[]
}

// airIndia.bookTicket()

const book = vistara.bookTicket
//This will not work
// book('AA123','Arjit');

book.call(airIndia,'AA123','Arjit')
console.log(airIndia.bookings);




function introduce(language,hobby){
    console.log(`Hello! I'm ${this.name}.
     I code in ${language}, and I enjoy ${hobby}.`);
}

// introduce('Javascript','Reading Books');

let person = {
    name :'Arjit',
}

let student = {
    name: 'Ketan',
}
// Using `call` to invoke `introduce` with `person` as `this`, 
// and passing arguments individually
introduce.call(person,'Javascript','Reading Books');
introduce.call(student,'Python','Playing Cricket');

// The apply method is similar to call, but instead of passing 
// arguments individually, you pass them as an array.

introduce.apply(student,['Python','Playing Cricket']);

// The bind method creates a new function
//  that, when called, has its this 
//  keyword set to the provided value
//   with a given sequence of arguments
//    preceding any provided when the new function is called.

const introStudent = introduce.bind(student);

introStudent('Python','Playing Cricket');

//IIFE - Immediately Invoked Function Expressions

// const runOnce = function(){
//     console.log('I am running once');
// }
// runOnce();

//IIFE
(function(){
    console.log('I am running once');
    const isPrivate = 23
})()

// console.log(isPrivate);


//Closures

const secureBookig = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log('Total passengers '+passengerCount);
    }
}
const booker = secureBookig();
booker();
booker();
booker();

//More ex

let f;


const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    }
}



const h = function(){
    const b = 20;
    f = function(){
        console.log(b*2);
    }
}

g();
f();
console.dir(f)

h();
f()

f()

console.log(passPerGroupt)

const boardPassengers = function(n,wait){
    const passPerGroupt = n/3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${passPerGroupt} passengers`);
    },wait*1000)
    console.log(`Will start boarding in ${wait} seconds`);
}

const passPerGroupt = 1000;
boardPassengers(180,3)