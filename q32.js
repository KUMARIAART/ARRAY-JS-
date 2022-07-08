// Write a function that takes one argument “n” and delete that many elements from the list.
// delete_nth ([1,1,1,1],2) # return [1,1]
// delete_nth ([20,37,20,21],1) # return [20,37,21]

let delete_nth=[20,37,20,21];
const user_input=require("readline-sync");
let n=user_input.questionInt("enter any number:-");
for(var i=0;i<n;i++){
    // delete_nth.pop();
    delete_nth.shift();
}
console.log(delete_nth);


