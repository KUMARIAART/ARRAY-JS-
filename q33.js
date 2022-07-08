// Given a List, extract all elements whose frequency is greater than K.
// Input: test_list = [4, 6, 4, 3, 3, 4, 3, 4, 3, 8], K = 3
// Output: [4, 3]
// Explanation: Both elements occur 4 times.
// Input: test_list = [4, 6, 4, 3, 3, 4, 3, 4, 6, 6], K = 2
// Output: [4, 3, 6]
// Explanation: Occur 4, 3, and 3 times respectively.

let number_list=[4, 6, 4, 3, 3, 4, 3, 4, 3, 8];
const user_input=require("readline-sync");
let K=user_input.questionInt("enter any number:-");
uniques=[]
duplicates=[]
for(var i of number_list){
  if(!uniques.includes(i)){
      uniques.push(i)
  }
}
for(var j of uniques){
    count=0
    for(var s of number_list){
        if (j === s){
            count+=1
        }
    }
    if(count>K){
    duplicates.push(j);
    };
}
console.log(duplicates);





