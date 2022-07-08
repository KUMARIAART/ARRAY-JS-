// Write a Python program to compute the average of nth elements in a given list of lists with
// different lengths.
// Original list:
// [[0, 1, 2], [2, 3, 4], [3, 4, 5, 6], [7, 8, 9, 10, 11], [12, 13, 14]]
// Average of n-th elements in the said list of lists with different lengths:
// [4.8, 5.8, 6.8, 8.0, 11.0]

let list1=[[0, 1, 2], [2, 3, 4], [3, 4, 5, 6], [7, 8, 9, 10, 11], [12, 13, 14]];
let list2=[];
for(i of list1){
    let sum=0;
    for(j of i){
        sum+=j
    }
    avr=sum/i.length
    list2.push(avr);
}
console.log(list2);