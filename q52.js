// Write a Python program to insert a specified element in a given list after every nth element.
// Original list:
// [1, 3, 5, 7, 9, 11, 0, 2, 4, 6, 8, 10, 8, 9, 0, 4, 3, 0]
// Insert 20 in said list after every 4 th element:
// [1, 3, 5, 7, 20, 9, 11, 0, 2, 20, 4, 6, 8, 10, 20, 8, 9, 0, 4, 20, 3, 0]
// Original list:
// ['s', 'd', 'f', 'j', 's', 'a', 'j', 'd', 'f', 'd']
// Insert Z in said list after every 3 th element:
// ['s', 'd', 'f', 'Z', 'j', 's', 'a', 'Z', 'j', 'd', 'f', 'Z', 'd']

let Original_list=[1, 3, 5, 7, 9, 11, 0, 2, 4, 6, 8, 10, 8, 9, 0, 4, 3, 0];
const user_input=require("readline-sync");
let element_position=user_input.questionInt("enter specific index position:-");
let new_list=[];
let num=20;
for( i in Original_list){
    if(i%element_position==0 && i!=0 ){
        new_list.push(num,Original_list[i])
    }
    else{
        new_list.push(Original_list[i])
    }
}
console.log(new_list);