'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// ----------- seattle -----------
let seattle = {
    name: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCustomers: 6.3,
    randomNumbOfCust: [],
    avgAmountPerHour: [],
    total: 0,


    getrandomNumbOfCust: function () {

        for (let i = 0; i < workingHours.length; i++) {

            this.randomNumbOfCust.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
            console.log(seattle.randomNumbOfCust[i]);
        }
    },

    getavgAmountPerHour: function () {

        for (let i = 0; i < workingHours.length; i++) {
            this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
            console.log(this.avgAmountPerHour[i]);
            this.total = this.total + this.avgAmountPerHour[i];

        }

    }

}

seattle.getrandomNumbOfCust();
seattle.getavgAmountPerHour();

console.log(seattle);
let parent = document.getElementById('seattle');
console.log(parent);
let h3Element = document.createElement('h3');
console.log(h3Element);
parent.appendChild(h3Element);

h3Element.textContent = seattle.name;
console.log(h3Element);
let ulElement = document.createElement('ul');
parent.appendChild(ulElement);
for (let i = 0; i < workingHours.length; i++) {
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = (`${workingHours[i]}:${seattle.avgAmountPerHour[i]}`);
}
let totalLiElement = document.createElement('li');
ulElement.appendChild(totalLiElement);
totalLiElement.textContent = ("Total:" + seattle.total);

// -----------tokyo-----------
let tokyo = {
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCustomers: 1.2,
    randomNumbOfCust: [],
    avgAmountPerHour: [],
    total: 0,


    getrandomNumbOfCust: function () {

        for (let i = 0; i < workingHours.length; i++) {

            this.randomNumbOfCust.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
            console.log(seattle.randomNumbOfCust[i]);
        }
    },

    getavgAmountPerHour: function () {

        for (let i = 0; i < workingHours.length; i++) {
            this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
            console.log(this.avgAmountPerHour[i]);
            this.total = this.total + this.avgAmountPerHour[i];

        }

    }

}

tokyo.getrandomNumbOfCust();
tokyo.getavgAmountPerHour();

console.log(tokyo);
let parent1 = document.getElementById('tokyo');
console.log(parent1);
let h3Element1 = document.createElement('h3');
console.log(h3Element1);
parent1.appendChild(h3Element1);

h3Element1.textContent = tokyo.name;
console.log(h3Element1);
let ulElement1 = document.createElement('ul');
parent1.appendChild(ulElement1);
for (let i = 0; i < workingHours.length; i++) {
    let liElement1 = document.createElement('li');
    ulElement1.appendChild(liElement1);
    liElement1.textContent = (`${workingHours[i]}:${tokyo.avgAmountPerHour[i]}`);
}
let totalLiElement1 = document.createElement('li');
ulElement1.appendChild(totalLiElement1);
totalLiElement1.textContent = ("Total:" + tokyo.total);

//------- Dubai--------
let dubai = {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCustomers: 3.7,
    randomNumbOfCust: [],
    avgAmountPerHour: [],
    total: 0,


    getrandomNumbOfCust: function () {

        for (let i = 0; i < workingHours.length; i++) {

            this.randomNumbOfCust.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
            console.log(seattle.randomNumbOfCust[i]);
        }
    },

    getavgAmountPerHour: function () {

        for (let i = 0; i < workingHours.length; i++) {
            this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
            console.log(this.avgAmountPerHour[i]);
            this.total = this.total + this.avgAmountPerHour[i];

        }

    }

}

dubai.getrandomNumbOfCust();
dubai.getavgAmountPerHour();

console.log(dubai);
let parent2 = document.getElementById('dubai');
console.log(parent2);
let h3Element2 = document.createElement('h3');
console.log(h3Element2);
parent2.appendChild(h3Element2);

h3Element2.textContent = dubai.name;
console.log(h3Element2);
let ulElement2 = document.createElement('ul');
parent2.appendChild(ulElement2);
for (let i = 0; i < workingHours.length; i++) {
    let liElement2 = document.createElement('li');
    ulElement2.appendChild(liElement2);
    liElement2.textContent = (`${workingHours[i]}:${dubai.avgAmountPerHour[i]}`);
}
let totalLiElement2 = document.createElement('li');
ulElement2.appendChild(totalLiElement2);
totalLiElement2.textContent = ("Total:" + dubai.total);

//------- Paris--------
let paris = {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCustomers: 2.3,
    randomNumbOfCust: [],
    avgAmountPerHour: [],
    total: 0,


    getrandomNumbOfCust: function () {

        for (let i = 0; i < workingHours.length; i++) {

            this.randomNumbOfCust.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
            console.log(seattle.randomNumbOfCust[i]);
        }
    },

    getavgAmountPerHour: function () {

        for (let i = 0; i < workingHours.length; i++) {
            this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
            console.log(this.avgAmountPerHour[i]);
            this.total = this.total + this.avgAmountPerHour[i];

        }

    }

}

paris.getrandomNumbOfCust();
paris.getavgAmountPerHour();

console.log(paris);
let parent3 = document.getElementById('paris');
console.log(parent3);
let h3Element3 = document.createElement('h3');
console.log(h3Element3);
parent3.appendChild(h3Element3);

h3Element3.textContent = paris.name;
console.log(h3Element3);
let ulElement3 = document.createElement('ul');
parent3.appendChild(ulElement3);
for (let i = 0; i < workingHours.length; i++) {
    let liElement3 = document.createElement('li');
    ulElement3.appendChild(liElement3);
    liElement3.textContent = (`${workingHours[i]}:${paris.avgAmountPerHour[i]}`);
}
let totalLiElement3 = document.createElement('li');
ulElement3.appendChild(totalLiElement3);
totalLiElement3.textContent = ("Total:" + paris.total);

//------- Lima--------
let lima = {
    name: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCustomers: 4.6,
    randomNumbOfCust: [],
    avgAmountPerHour: [],
    total: 0,


    getrandomNumbOfCust: function () {

        for (let i = 0; i < workingHours.length; i++) {

            this.randomNumbOfCust.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
            console.log(seattle.randomNumbOfCust[i]);
        }
    },

    getavgAmountPerHour: function () {

        for (let i = 0; i < workingHours.length; i++) {
            this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
            console.log(this.avgAmountPerHour[i]);
            this.total = this.total + this.avgAmountPerHour[i];

        }

    }

}

lima.getrandomNumbOfCust();
lima.getavgAmountPerHour();

console.log(lima);
let parent4 = document.getElementById('lima');
console.log(parent4);
let h3Element4 = document.createElement('h3');
console.log(h3Element4);
parent3.appendChild(h3Element4);

h3Element4.textContent = lima.name;
console.log(h3Element4);
let ulElement4 = document.createElement('ul');
parent4.appendChild(ulElement4);
for (let i = 0; i < workingHours.length; i++) {
    let liElement4 = document.createElement('li');
    ulElement4.appendChild(liElement4);
    liElement4.textContent = (`${workingHours[i]}:${lima.avgAmountPerHour[i]}`);
}
let totalLiElement4 = document.createElement('li');
ulElement4.appendChild(totalLiElement4);
totalLiElement4.textContent = ("Total:" + lima.total);