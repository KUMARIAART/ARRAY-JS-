// Our task is to print the element which occurs 3 consecutive times in a Python list.
// Example:
// Input: [4, 5, 5, 5, 3, 8]
// Output: 5
// Input: [1, 1, 1, 64, 23, 64, 22, 22, 22]
// Output: 1, 22

var test_list=[1,1, 5, 5, 5,5, 3, 8];
var a=[];
for(i of test_list){
    var count=0;
    for(j of test_list){
        if(i==j){
            count+=1
        }
    }
    if(count>=3){
        if (!a.includes(i)){
            a.push(i);
        }
    }
}
console.log(a);