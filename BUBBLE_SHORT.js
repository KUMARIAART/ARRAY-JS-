const user_Input=require("readline-sync");
let list=user_Input.questionInt("enter any number for length of list:-");
let arr=[];
for (var i=1;i<=list;i++){
    let numbers=user_Input.questionInt("enter numbers for list:-")
    arr.push(numbers);
}
console.log("your list is....",arr);
const option=user_Input.question("In which order you wnat to short a list asscending and disscending:-");

if(option==="asscending"){
    for(var i=arr.length-1;i>0;i--){
        for(var j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
}
else if (option==="disscending"){
    for(var i=arr.length-1;i>0;i--){
        for(var j=0;j<i;j++){
            if(arr[j]<arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
}
console.log(arr);