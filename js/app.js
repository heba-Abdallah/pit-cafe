'use strict';
let workingHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total']
let cafesArr = [];

function cafe(name, min, max, avg) {
    this.name = name;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCustomers = avg;
    this.randomNumbOfCust = [];
    this.avgAmountPerHour = [];
    this.total = 0
    cafesArr.push(this);
}
cafe.prototype.getrandomNumbOfCust = function () {
    for (let i = 0; i < workingHours.length; i++) {

        this.randomNumbOfCust.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
        console.log(this.randomNumbOfCust[i]);
    }
}
cafe.prototype.getavgAmountPerHour = function () {
    for (let i = 0; i < workingHours.length; i++) {
        this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
        console.log(this.avgAmountPerHour[i]);
        this.total = this.total + this.avgAmountPerHour[i];

    }
}
let seattle = new cafe('Seattle', 23, 65, 6.3);
seattle.getrandomNumbOfCust();
seattle.getavgAmountPerHour();
let tokyo = new cafe('Tokyo', 3, 24, 1.2);
tokyo.getrandomNumbOfCust();
tokyo.getavgAmountPerHour();
let dubai = new cafe('Dubai', 11, 38, 3.7);
dubai.getrandomNumbOfCust();
dubai.getavgAmountPerHour();
let paris = new cafe('Paris', 20, 38, 2.3);
paris.getrandomNumbOfCust();
paris.getavgAmountPerHour();
let lima = new cafe('Lima', 2, 16, 4.6);
lima.getrandomNumbOfCust();
lima.getavgAmountPerHour();

let parent = document.getElementById('parent');
console.log(parent);
let table = document.createElement('table');
console.log(table);
parent.appendChild(table);

let header = function () {
    let headingRow = document.createElement('tr')
    table.appendChild(headingRow);
    // console.log("heba" , headingRow);
    for (let i = 0; i < workingHours.length; i++) {
        let thElement = document.createElement('th');
        headingRow.appendChild(thElement);
        thElement.textContent = workingHours[i];
    }

}
header();
cafe.prototype.render = function () {
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    console.log("hi", dataRow);
    let colTable = document.createElement('td');
    dataRow.appendChild(colTable);
    colTable.textContent = `${this.name}`;

    for (let i = 1; i < this.avgAmountPerHour.length; i++) {
        let tdElement = document.createElement('td');
        dataRow.appendChild(tdElement);
        tdElement.textContent = this.avgAmountPerHour[i];
        console.log("hello", tdElement);


    }

}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

console.log(cafesArr);
// // ------- Lima ---------

// let lima = {
//     name: 'Lima',
//     minCustomers: 2,
//     maxCustomers: 16,
//     avgCustomers: 4.6,
//     randomNumbOfCust: [],
//     avgAmountPerHour: [],
//     total: 0,


//     getrandomNumbOfCust: function () {

//         for (let i = 0; i < workingHours.length; i++) {

//             this.randomNumbOfCust.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
//             console.log(this.randomNumbOfCust[i]);
//         }
//     },

//     getavgAmountPerHour: function () {

//         for (let i = 0; i < workingHours.length; i++) {
//             this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
//             console.log(this.avgAmountPerHour[i]);
//             this.total = this.total + this.avgAmountPerHour[i];

//         }

//     },

//     render: function () {
//         let parent = document.getElementById('parent');
//         console.log(parent);
//         let h3Element = document.createElement('h3');
//         console.log(h3Element);
//         parent.appendChild(h3Element);

//         h3Element.textContent = this.name;
//         console.log(h3Element);
//         let ulElement = document.createElement('ul');
//         parent.appendChild(ulElement);
//         for (let i = 0; i < workingHours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = (`${workingHours[i]}:${this.avgAmountPerHour[i]} cookies`);
//         }
//         let totalLiElement = document.createElement('li');
//         ulElement.appendChild(totalLiElement);
//         totalLiElement.textContent = ("Total:" + this.total + "cookies");
//     }
// }
// lima.getrandomNumbOfCust();
// lima.getavgAmountPerHour();
// lima.render();

// console.log(lima); 
