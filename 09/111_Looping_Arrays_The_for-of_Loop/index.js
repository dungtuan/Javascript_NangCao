'use strict';
const restaurent = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vagetarian', 'Organic'],
    starerMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24
        }
    },
    order: function (starerIndex, mainIndex) {
        return [this.starerMenu[starerIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({ starerIndex = 1, mainIndex = 0, time = '22:00', address }) {
        console.log(`Order received! ${this.starerMenu[starerIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to ${address}
          at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },
    orderPizza: function (mainIngredient, ...otherIngredient) {
        console.log(mainIngredient)
        console.log(otherIngredient)
    }
};

const rest1 = {
    name: 'Capri',
    numGeests: 0,
};
const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

const menu = [...restaurent.starerMenu, ...restaurent.mainMenu]
for (const item of menu) {
    console.log(item)
}
for (const [i,el] of menu.entries()) {
    console.log(`${i + 1} :${el}`)
}
console.log(...menu.entries())