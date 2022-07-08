// Given start and end of a range, write a Python program to print all positive numbers in 
// given range.
// Example:
// Input: start = -4, end = 5
// Output: 0, 1, 2, 3, 4, 5 

// Input: start = -3, end = 4
// Output: 0, 1, 2, 3, 4

const user_input=require("readline-sync");
let start=user_input.questionInt("enter start of a range:-");
let end=user_input.questionInt("enter end of a range:-");
let str="";
for(var i=start;i<=end;i++){
    if(i>=0){
        str+=i+","
    }
}
console.log(str);