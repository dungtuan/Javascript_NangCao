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

//Destructuring 

//Spread , because on Right side of 
const arr = [1, 2, ...[3, 4]];

//Rest becasue on Left side of
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

const [pizza, , Risotto, ...otherFood] = [...restaurent.mainMenu, ...restaurent.starerMenu];
console.log(pizza, Risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurent.openingHours
console.log(weekdays)

//2 function
const add = function (...numbers) {
    let sum = 0
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index]
    }

    console.log(numbers);
    console.log(sum)
}
add(2, 3)
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4)

const x = [23, 5, 7]
add(...x)

restaurent.orderPizza('mushroom', 'onion', 'olives', 'spinach')
restaurent.orderPizza('mushroom')

// const arr=[7,8,9];
// const badNewArr=[1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr);

// const newArr=[1,2,...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu=[...restaurent.mainMenu,'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy=[...restaurent.mainMenu];
// console.log(mainMenuCopy);

// //join 2 arrays
// const menu= [...restaurent.starerMenu,...restaurent.mainMenu];
// console.log(menu);

// //Iterables : arrays , strings , maps, sets . Not objects
// const str='Jonas';
// const letters= [...str,' ','S.'];
// console.log(letters);
// console.log(...str);
// console.log(`${str} Schmedtamn`)
// // const ingredients = [prompt('Let make pasta ! Ingredient 1 ?'),
// // prompt('Let make pasta ! Ingredient 2 ?'),
// // prompt('Let make pasta ! Ingredient 3 ?')]
// // console.log(ingredients);

// // restaurent.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// // restaurent.orderPasta(...ingredients);

// //Objects
// const newRestaurent= {foundedIn : 1998 ,...restaurent, founder: 'Guiseppe'};
// console.log(newRestaurent);

// const restaurentCopy={...restaurent};
// restaurentCopy.name='Ristorante Roma';
// console.log('restaurentCopy :>> ', restaurentCopy.name);
// console.log('restaurent :>> ', restaurent.name);
