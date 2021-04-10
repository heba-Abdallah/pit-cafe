'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let cafesArr = [];

function Cafe(name, min, max, avg) {
    this.name = name;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCustomers = avg;
    this.randomNumbOfCust = [];
    this.avgAmountPerHour = [];
    this.total = 0
    cafesArr.push(this);
}
Cafe.prototype.getrandomNumbOfCust = function () {
    for (let i = 0; i < workingHours.length; i++) {

        this.randomNumbOfCust.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
       
    }
}
Cafe.prototype.getavgAmountPerHour = function () {
    for (let i = 0; i < workingHours.length; i++) {
        this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
        this.total = this.total + this.avgAmountPerHour[i];

    }
}
const seattle = new Cafe('Seattle', 23, 65, 6.3);
const tokyo = new Cafe('Tokyo', 3, 24, 1.2);
const dubai = new Cafe('Dubai', 11, 38, 3.7);
const paris = new Cafe('Paris', 20, 38, 2.3);
const lima = new Cafe('Lima', 2, 16, 4.6);

let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);

function makingHeader() {

    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let firstTh = document.createElement('th');
    headingRow.appendChild(firstTh);
    firstTh.textContent = "Name";

    for (let i = 0; i < workingHours.length; i++) {
        let thElement = document.createElement('th');
        headingRow.appendChild(thElement);
        thElement.textContent = workingHours[i];
    }
    let lastRow = document.createElement('th');
    headingRow.appendChild(lastRow);
    lastRow.textContent = 'Daily Total';

}

Cafe.prototype.render = function () {
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    let colTable = document.createElement('td');
    dataRow.appendChild(colTable);
    colTable.textContent = `${this.name}`;

    for (let i = 0; i < workingHours.length; i++) {
        let tdElement = document.createElement('td');
        dataRow.appendChild(tdElement);
        tdElement.textContent = this.avgAmountPerHour[i];
    }

    let dailyTd = document.createElement('td');
    dataRow.appendChild(dailyTd);
    dailyTd.textContent = this.total;
}
function makingFooter() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let finaleTh = document.createElement('th');
    footerRow.appendChild(finaleTh);
    finaleTh.textContent = 'Totals';


    let totalForEachHour;
    let all = 0;
    for (let i = 0; i < workingHours.length; i++) {
        totalForEachHour = 0;
        for (let j = 0; j < cafesArr.length; j++) {
            totalForEachHour += cafesArr[j].avgAmountPerHour[i];
            all += cafesArr[j].avgAmountPerHour[i];
        }
        let footerTh = document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent = totalForEachHour;
    }
    let totaOfTotalTd = document.createElement('td');
    footerRow.appendChild(totaOfTotalTd);
    totaOfTotalTd.textContent = all;
}

let salesInput = document.getElementById('salesInput');

salesInput.addEventListener('submit', submitter);
function submitter(event) {
    event.preventDefault();
    let name = event.target.nameInput.value;
    let minCustomers = parseInt(event.target.minInput.value);
    let maxCustomers = parseInt(event.target.maxInput.value);
    let avgCustomers = parseInt(event.target.avgInput.value);
    let addedCafe = new Cafe(name, minCustomers, maxCustomers, avgCustomers);

    
    table.textContent = '';
    makingHeader();;

    for (let i = 0; i < cafesArr.length; i++) {
        cafesArr[i].getrandomNumbOfCust();
        cafesArr[i].getavgAmountPerHour();
        cafesArr[i].render();
    }
    makingFooter();

}

makingHeader();
for (let i = 0; i < cafesArr.length; i++) {
    cafesArr[i].getrandomNumbOfCust();
    cafesArr[i].getavgAmountPerHour();
    cafesArr[i].render();
}
makingFooter();