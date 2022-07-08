// Write a Python program to iterate a given list cyclically on specific index position. 
// Original list:
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// Iterate the said list cyclically on specific index position 3 :
// ['d', 'e', 'f', 'g', 'h', 'a', 'b', 'c']
// Iterate the said list cyclically on specific index position 5 :
// ['f', 'g', 'h', 'a', 'b', 'c', 'd', 'e']

const Original_list=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const user_input=require("readline-sync");
let index_position=user_input.questionInt("enter specific index position:-");
a=Original_list.splice(index_position,Original_list.length)
b=Original_list.splice(0,index_position)
console.log(a.concat(b))

