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

    orderDelivery: function ({ starerIndex=1, mainIndex=0, time='22:00', address }) {
        console.log(`Order received! ${this.starerMenu[starerIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to ${address}
          at ${time}`);
    },
    orderPasta:function (ing1,ing2,ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    }
};

const arr=[7,8,9];
const badNewArr=[1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr=[1,2,...arr];
console.log(newArr);
console.log(...newArr);

const newMenu=[...restaurent.mainMenu,'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy=[...restaurent.mainMenu];
console.log(mainMenuCopy);

//join 2 arrays
const menu= [...restaurent.starerMenu,...restaurent.mainMenu];
console.log(menu);

//Iterables : arrays , strings , maps, sets . Not objects
const str='Jonas';
const letters= [...str,' ','S.'];
console.log(letters);
console.log(...str);
console.log(`${str} Schmedtamn`)
// const ingredients = [prompt('Let make pasta ! Ingredient 1 ?'),
// prompt('Let make pasta ! Ingredient 2 ?'),
// prompt('Let make pasta ! Ingredient 3 ?')]
// console.log(ingredients);

// restaurent.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurent.orderPasta(...ingredients);

//Objects
const newRestaurent= {foundedIn : 1998 ,...restaurent, founder: 'Guiseppe'};
console.log(newRestaurent);

const restaurentCopy={...restaurent};
restaurentCopy.name='Ristorante Roma';
console.log('restaurentCopy :>> ', restaurentCopy.name);
console.log('restaurent :>> ', restaurent.name);
// restaurent.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole , 21',
//     mainIndex: 2,
//     starerIndex: 2,
// });

// restaurent.orderDelivery({
//     address: 'Via del Sole , 21',
//     starerIndex:1,
// })

// const { name, openingHours, categories } = restaurent;
// console.log(name, openingHours, categories);

// const { name: restaurentName, openingHours: hours, categories: tags } = restaurent;
// console.log(restaurentName, hours, tags);


// const {
//     menu = [],
//     starerMenu: starter = []
// } = restaurent;
// console.log(menu, starter);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 4 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);

//Destructuring Array
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [first, , second] = restaurent.categories;
// console.log(first, second);

// // const temp = first;
// // first = second;
// // second = temp;
// // console.log(first, second);

// [first, second] = [second, first];

// console.log(first, second);

// console.log(restaurent.order(2, 2));

// //return 2 value from a function
// const [starter, mainCourse] = restaurent.order(2, 2);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p=1,q=1,r=1]= [8,9];
// console.log(p,q,r);