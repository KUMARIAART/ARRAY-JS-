let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]



//Using splice() method
let languages = ["JavaScript", "Python", "Java", "Lua"];

// replacing "Java" & "Lua" with "C" & "C++"
let removed = languages.splice(2, 2, "C", "C++");
console.log(removed); // [ 'Java', 'Lua' ]
console.log(languages); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// adding elements without deleting existing elements
let removed1 = languages.splice(1, 0, "Java", "Lua");
console.log(removed1); // []
console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]

// removing 3 elements
let removed2 = languages.splice(2, 3);
console.log(removed2); // [ 'Lua', 'Python', 'C' ]
console.log(languages); // [ 'JavaScript', 'Java', 'C++' ]



// //Using splice() for different deleteCount values
// let languages = ["JavaScript", "Python", "Java", "Lua"];

// // does not removes, only appends to the end
// let removed = languages.splice(5, 2, "C++");
// console.log(removed); // []
// console.log(languages); // ["JavaScript", "Python", "Java", "Lua", "C++"]

// // remove last element and add 3 more elements
// let removed1 = languages.splice(-1, 1, "Swift", "Scala", "Go");
// console.log(removed1); // [ "C++" ]
// console.log(languages); // ["JavaScript", "Python", "Java", "Lua", "Swift", "Scala", "Go"]



//Using splice() for different start values
// let languages = ["JavaScript", "Python", "Java", "Lua"];

// // removes everything from start
// let removed = languages.splice(1);
// console.log(removed); // [ "Python", "Java", "Lua" ]
// console.log(languages); // [ "JavaScript" ]

// // remove none & add 3 more element
// let removed1 = languages.splice(1, -2, "Swift", "Scala", "Go");
// console.log(removed1); // [ ]
// console.log(languages); // [ "JavaScript", "Swift", "Scala", "Go" ]




