// Given 3 digits a, b, and c. The task is to find all the possible combinations from these digits.
// Examples:
// Input: [1, 2, 3]
// Output:
// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1

const user_input=require("readline-sync");
let a=user_input.questionInt("enter first number:-");
let b=user_input.questionInt("enter second number:-");
let c=user_input.questionInt("enter third number:-");
let input=[];
input.push(a,b,c);
console.log(input);
for(x of input){
    for(y of input){
        for(z of input){
            if(x!=y && y!=z && x!=z){
                console.log(x,y,z);
            }
        }
    }
}

 