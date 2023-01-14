'use strict';

const weekdays=['mon','tue','wed','thu','fri','sat','sun']
const openingHours = {
    [weekdays[3]]:
     {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 12+12
    }
}
const restaurent = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vagetarian', 'Organic'],
    starerMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //ES6 enhanced object literals
    openingHours,

    order(starerIndex, mainIndex) {
        return [this.starerMenu[starerIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({ starerIndex = 1, mainIndex = 0, time = '22:00', address }) {
        console.log(`Order received! ${this.starerMenu[starerIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to ${address}
          at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },
    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient)
        console.log(otherIngredient)
    }
};

// const rest1 = {
//     name: 'Capri',
//     numGeests: 0,
// };
// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };

// const menu = [...restaurent.starerMenu, ...restaurent.mainMenu]
// for (const item of menu) {
//     console.log(item)
// }
// for (const [i,el] of menu.entries()) {
//     console.log(`${i + 1} :${el}`)
// }
// console.log(...menu.entries())