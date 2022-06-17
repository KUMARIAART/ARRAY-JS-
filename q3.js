//Array.prototype.slice()

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]




// Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

// Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)




myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
         'cherry condition', 'purchased 1997']
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
//The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple


let numbers = [2, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(3, 6);
console.log(newArray);

// Output: [ 7, 11, 13 ]


//JavaScript slice() method
let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]



//JavaScript slice() With Negative index
// const languages = ["JavaScript", "Python", "C", "C++", "Java"];

// // slicing the array from start to second-to-last
// let new_arr = languages.slice(0, -1);
// console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// // slicing the array from third-to-last
// let new_arr1 = languages.slice(-3);
// console.log(new_arr1); // [ 'C', 'C++', 'Java' ]



//JavaScript slice() with Objects as Array Elements
// let human = {
//     name: "David",
//     age: 23,
//   };
  
//   let arr = [human, "Nepal", "Manager"];
//   let new_arr = arr.slice();
  
//   // original object
//   console.log(arr[0]); // { name: 'David', age: 23 }
  
//   // making changes to the object in new array
//   new_arr[0].name = "Levy";
  
//   // changes are reflected
//   console.log(arr[0]); // { name: 'Levy', age: 23 }







