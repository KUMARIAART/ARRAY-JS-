// Given a list of numbers, write a Python program to count positive and negative numbers in a
// List.
// Example:
// list1 = [2, -7, 5, -64, -14]
// Output: pos = 2, neg = 3

// Iist2 = [-12, 14, 95, 3]
// Output: pos = 3, neg = 1

let list1 = [2, -7, 5, -64, -14];
let positive=0;
let negative=0;
for(i of list1){
    if(i>=0){
        positive+=1
    }
    else{
        negative+=1
    }
}
console.log("positive numbers are:-",positive);
console.log("negative numbers are:-",negative);

