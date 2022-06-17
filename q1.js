// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];


//JavaScript Array Methods
let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); // 2

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]


//Array's splice() method to add an element at a specified index
let studentsData = [['Jack', 24], ['Sara', 23],];

// adding element at 1 index
studentsData.splice(1, 0, ['Peter', 24]);

console.log(studentsData); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]



//Remove an Element from a Multidimensional Array
//Array's pop() method to remove the element from a multidimensional array
//Remove Element from Outer Array
// remove the array element from outer array
let studentsData1 = [['Jack', 24], ['Sara', 23],];
studentsData1.pop();

console.log(studentsData1); // [["Jack", 24]]


//Remove Element from Inner Array
// remove the element from the inner array
let studentsData2 = [['Jack', 24], ['Sara', 23]];
studentsData2[1].pop();

console.log(studentsData2); // [["Jack", 24], ["Sara"]]


//splice() method to remove an element at a specified index
let studentsData3 = [['Jack', 24], ['Sara', 23],];

// removing 1 index array item
studentsData3.splice(1,1);
console.log(studentsData3); // [["Jack", 24]]









