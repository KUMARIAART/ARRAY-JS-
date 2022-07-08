// Write a Python program to split a given list into specified sized chunks. 
// Original list:
// [12, 45, 23, 67, 78, 90, 45, 32, 100, 76, 38, 62, 73, 29, 83]
// Split the said list into equal size 3
// [[12, 45, 23], [67, 78, 90], [45, 32, 100], [76, 38, 62], [73, 29, 83]]
// Split the said list into equal size 4
// [[12, 45, 23, 67], [78, 90, 45, 32], [100, 76, 38, 62], [73, 29, 83]]
// Split the said list into equal size 5
// [[12, 45, 23, 67, 78], [90, 45, 32, 100, 76], [38, 62, 73, 29, 83]]

let Original_list=[12, 45, 23, 67, 78, 90, 45, 32, 100, 76, 38, 62, 73, 29, 83];
const user_input=require("readline-sync");
let n=user_input.questionInt("enter split size:-");
let list1=[];

for(var i=0;i<Original_list.length;i+=3){
    var list2=[];
    var k=i;
    for(var j=0;j<n;j++){
        list2.push(Original_list[k])
        k++
    }
    list1.push(list2);
}
console.log(list1);
