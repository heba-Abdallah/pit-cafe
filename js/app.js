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
            console.log(this.randomNumbOfCust[i]);
        }
    },

    getavgAmountPerHour: function () {

        for (let i = 0; i < workingHours.length; i++) {
            this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
            console.log(this.avgAmountPerHour[i]);
            this.total = this.total + this.avgAmountPerHour[i];

        }

    },

    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let h3Element = document.createElement('h3');
        console.log(h3Element);
        parent.appendChild(h3Element);

        h3Element.textContent = this.name;
        console.log(h3Element);
        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        for (let i = 0; i < workingHours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = (`${workingHours[i]}:${this.avgAmountPerHour[i]} cookies`);
        }
        let totalLiElement = document.createElement('li');
        ulElement.appendChild(totalLiElement);
        totalLiElement.textContent = ("Total:" + this.total + "cookies");
    }
}
seattle.getrandomNumbOfCust();
seattle.getavgAmountPerHour();
seattle.render();

console.log(seattle);


//     // -----------tokyo-----------

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
            console.log(this.randomNumbOfCust[i]);
        }
    },

    getavgAmountPerHour: function () {

        for (let i = 0; i < workingHours.length; i++) {
            this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
            console.log(this.avgAmountPerHour[i]);
            this.total = this.total + this.avgAmountPerHour[i];

        }

    },

    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let h3Element = document.createElement('h3');
        console.log(h3Element);
        parent.appendChild(h3Element);

        h3Element.textContent = this.name;
        console.log(h3Element);
        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        for (let i = 0; i < workingHours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = (`${workingHours[i]}:${this.avgAmountPerHour[i]} cookies`);
        }
        let totalLiElement = document.createElement('li');
        ulElement.appendChild(totalLiElement);
        totalLiElement.textContent = ("Total:" + this.total + "cookies");
    }
}
tokyo.getrandomNumbOfCust();
tokyo.getavgAmountPerHour();
tokyo.render();

console.log(tokyo);

// -------- Dubai -------

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
            console.log(this.randomNumbOfCust[i]);
        }
    },

    getavgAmountPerHour: function () {

        for (let i = 0; i < workingHours.length; i++) {
            this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
            console.log(this.avgAmountPerHour[i]);
            this.total = this.total + this.avgAmountPerHour[i];

        }

    },

    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let h3Element = document.createElement('h3');
        console.log(h3Element);
        parent.appendChild(h3Element);

        h3Element.textContent = this.name;
        console.log(h3Element);
        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        for (let i = 0; i < workingHours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = (`${workingHours[i]}:${this.avgAmountPerHour[i]} cookies`);
        }
        let totalLiElement = document.createElement('li');
        ulElement.appendChild(totalLiElement);
        totalLiElement.textContent = ("Total:" + this.total + "cookies");
    }
}
dubai.getrandomNumbOfCust();
dubai.getavgAmountPerHour();
dubai.render();

console.log(dubai);

// ------- Paris ---------

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
            console.log(this.randomNumbOfCust[i]);
        }
    },

    getavgAmountPerHour: function () {

        for (let i = 0; i < workingHours.length; i++) {
            this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
            console.log(this.avgAmountPerHour[i]);
            this.total = this.total + this.avgAmountPerHour[i];

        }

    },

    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let h3Element = document.createElement('h3');
        console.log(h3Element);
        parent.appendChild(h3Element);

        h3Element.textContent = this.name;
        console.log(h3Element);
        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        for (let i = 0; i < workingHours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = (`${workingHours[i]}:${this.avgAmountPerHour[i]} cookies`);
        }
        let totalLiElement = document.createElement('li');
        ulElement.appendChild(totalLiElement);
        totalLiElement.textContent = ("Total:" + this.total + "cookies");
    }
}
paris.getrandomNumbOfCust();
paris.getavgAmountPerHour();
paris.render();

console.log(paris);

// ------- Lima ---------

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
            console.log(this.randomNumbOfCust[i]);
        }
    },

    getavgAmountPerHour: function () {

        for (let i = 0; i < workingHours.length; i++) {
            this.avgAmountPerHour.push(Math.floor(this.randomNumbOfCust[i] * this.avgCustomers));
            console.log(this.avgAmountPerHour[i]);
            this.total = this.total + this.avgAmountPerHour[i];

        }

    },

    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let h3Element = document.createElement('h3');
        console.log(h3Element);
        parent.appendChild(h3Element);

        h3Element.textContent = this.name;
        console.log(h3Element);
        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        for (let i = 0; i < workingHours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = (`${workingHours[i]}:${this.avgAmountPerHour[i]} cookies`);
        }
        let totalLiElement = document.createElement('li');
        ulElement.appendChild(totalLiElement);
        totalLiElement.textContent = ("Total:" + this.total + "cookies");
    }
}
lima.getrandomNumbOfCust();
lima.getavgAmountPerHour();
lima.render();

console.log(lima);
