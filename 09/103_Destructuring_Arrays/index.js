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
    }
};

const { name, openingHours, categories } = restaurent;
console.log(name, openingHours, categories);

const { name: restaurentName, openingHours: hours, categories: tags } = restaurent;
console.log(restaurentName, hours, tags);


const {
    menu = [], 
    starerMenu: starter = []
} = restaurent;

console.log(menu,starter);



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