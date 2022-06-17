// Write a Python program to create a list reflecting the modified run-length encoding from 
// a given list of integers or a given list of characters. 
// Original list:
// [1, 1, 2, 3, 4, 4, 5, 1]
// List reflecting the modified run-length encoding from the said list:
// [[2, 1], 2, 3, [2, 4], 5, 1]
// Original String:
// aabcddddadnss
// List reflecting the modified run-length encoding from the said string:
// [[2, 'a'], 'b', 'c', [4, 'd'], 'a', 'd', 'n', [2, 's']]

let Original_list=[1, 1, 2, 3, 4, 4, 5, 1];
let l1=[];
for(let i=0;i<Original_list.length;i++){
    if(!l1.includes(Original_list[i])){
        l1.push(Original_list[i])
    }
}
console.log(l1);

for(let j=0;j<l1.length;j++){
    let count=0;
    for(let k=0;k<Original_list.length;k++){
        if(j===k){
            count+=1
        }
    }console.log(j,count," times");
}


