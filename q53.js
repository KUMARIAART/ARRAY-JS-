// Write a Python program to add a number to each element in a given list of numbers.
// Original lists:
// [3, 8, 9, 4, 5, 0, 5, 0, 3]
// Add 3 to each element in the said list:
// [6, 11, 12, 7, 8, 3, 8, 3, 6]
// Original lists:
// [3.2, 8, 9.9, 4.2, 5, 0.1, 5, 3.11, 0]
// Add 0.51 to each element in the said list:
// [3.71, 8.51, 10.41, 4.71, 5.51, 0.61, 5.51, 3.62, 0.51]

const Original_list=[3, 8, 9, 4, 5, 0, 5, 0, 3];
const user_input=require("readline-sync");
let numbers=user_input.questionInt("enter any number:-");
let new_list=[];
let sum=0;
for(i of Original_list){
    sum=i+numbers
    new_list.push(sum);
}
console.log(new_list);