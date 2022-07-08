// Write a Python program to find the difference between elements (n+1th - nth) of a given list
// of numeric values.
// Original list:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Difference between elements (n+1th - nth) of the said list :
// [1, 1, 1, 1, 1, 1, 1, 1, 1]
// Original list:
// [2, 4, 6, 8]
// Difference between elements (n+1th - nth) of the said list :
// [2, 2, 2]


let Original_list=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let new_list=[];
for(var i=1;i<Original_list.length;i++){
    differ=Original_list[i]-Original_list[i-1]
    new_list.push(differ);
}
console.log(new_list);
