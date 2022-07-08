// Given the start and end of a range, write a Python program to print all negative numbers in
// a given range.
// Example:
// Input: start = -4, end = 5
// Output: -4, -3, -2, -1

// Input: start = -3, end = 4
// Output: -3, -2, -1

const user_input=require("readline-sync");
let start=user_input.questionInt("enter start of a range:-");
let end=user_input.questionInt("enter end of a range:-");
let str="";
for(var i=start;i<end;i++){
    if(i<0){
        str+=i+","
    }
    else{
        break;
    }
}
console.log(str);