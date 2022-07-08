//  Write a Python program to find the last occurrence of a specified item in a given list.
//  Original list:
//  ['s', 'd', 'f', 's', 'd', 'f', 's', 'f', 'k', 'o', 'p', 'i', 'w', 'e', 'k', 'c']
//  Last occurrence of f in the said list:
//  7
//  Last occurrence of c in the said list:
//  15
//  Last occurrence of k in the said list:
//  14
//  Last occurrence of w in the said list:
//  12
 
let Original_list=['s', 'd', 'f', 's', 'd', 'f', 's', 'f', 'k', 'o', 'p', 'i', 'w', 'e', 'k', 'c'];
const user_input=require("readline-sync");
let char=user_input.question("enter any cahr:-");
let count_length=0;
for(var i=0;i<Original_list.length;i++){
    if(Original_list[i]==char){
        count_length=i}
}
console.log(count_length);