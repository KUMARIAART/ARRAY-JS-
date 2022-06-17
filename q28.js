// Write a Python program to find the list with maximum and minimum length.
// Original list:
// [[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]
// List with maximum length of lists:
// (3, [13, 15, 17])
// List with minimum length of lists:
// (1, [0])

Original_list=[[0,1], [1,7,8], [5, 7,7], [9,4,5], [13,465, 15, 17]];
let max_length=Original_list[0].length
let min_length=Original_list[0].length
let max_length_list=Original_list[0]
let min_length_list=Original_list[0]
for(i of Original_list){
    if(max_length<i.length){
        max_length=i.length
        max_length_list=i
    }
    else if(min_length>i.length){
        min_length=i.length
        min_length_list=i
    }

}  
console.log("(",max_length,',',max_length_list,")");
console.log("(",min_length,',',min_length_list,")");  


