//Updating the Array Elements
let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item, index, arr) {

    // adding strings to the array elements
    arr[index] = 'Hello ' + item;
}

console.log(students);



//forEach with Arrow Function
// with arrow function and callback

const students1 = ['John', 'Sara', 'Jack'];

students1.forEach(element => {
  console.log(element);
});



//for loop to forEach()
const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];

// using for loop
for (let i = 0; i < arrayItems.length; i++) {
  copyItems.push(arrayItems[i]);
}

console.log(copyItems);



//Using forEach()
const arrayItems1 = ['item1', 'item2', 'item3'];
const copyItems1 = [];

// using forEach
arrayItems1.forEach(function(item){
  copyItems1.push(item);
})

console.log(copyItems1);



//for...of with Sets
// define Set
const set = new Set([1, 2, 3]);

// looping through Set
set.forEach(myFunction);

function myFunction(item) {
    console.log(item);
}



//forEach with Maps
let map = new Map();

// inserting elements
map.set('name', 'Jack');
map.set('age', '27');

// looping through Map
map.forEach (myFunction);

function myFunction(value, key) {
    
    console.log(key + '- ' + value);
}



//Iterating over Multidimensional Array
//the Array's forEach() method to iterate over the multidimensional array
let studentsData = [['Jack', 24], ['Sara', 23],];

// iterating over the studentsData
studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});



//for...of loop to iterate over the multidimensional array
let studentsData1 = [['Jack', 24], ['Sara', 23],];

for (let i of studentsData1) {
  for (let j of i) {
    console.log(j);
  }
}


//for loop to iterate over a multidimensional array.
let studentsData2 = [['Jack', 24], ['Sara', 23],];

// looping outer array elements
for(let i = 0; i < studentsData2.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = studentsData2[i].length;
    
    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData2[i][j]);
    }
}

