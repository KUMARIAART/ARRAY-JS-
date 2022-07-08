// Write a Python program to remove the last N number of elements from a given list. 
// Original lists:
// [2, 3, 9, 8, 2, 0, 39, 84, 2, 2, 34, 2, 34, 5, 3, 5]
// Remove the last 3 elements from the said list:
// [2, 3, 9, 8, 2, 0, 39, 84, 2, 2, 34, 2, 34]
// Remove the last 5 elements from the said list:
// [2, 3, 9, 8, 2, 0, 39, 84, 2, 2, 34]
// Remove the last 1 element from the said list:
// [2, 3, 9, 8, 2, 0, 39, 84, 2, 2, 34, 2, 34, 5, 3]

const Original_list=[2, 3, 9, 8, 2, 0, 39, 84, 2, 2, 34, 2, 34, 5, 3, 5];
const user_input=require("readline-sync");
let n=user_input.questionInt("enter number for remove:-");
a=Original_list.length
Original_list.splice(a-n,)
console.log(Original_list);
 