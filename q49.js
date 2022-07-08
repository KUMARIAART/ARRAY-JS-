// Write a Python program to sum two or more lists, the lengths of the lists may be different. 
// Original list:
// [[1, 2, 4], [2, 4, 4], [1, 2]]
// Sum said lists with different lengths:
// [4, 8, 8]
// Original list:
// [[1], [2, 4, 4], [1, 2], [4]]
// Sum said lists with different lengths:
// [8, 6, 4]

let Original_list=[[1, 2, 4], [2, 4, 4], [1, 2]];
let new_list=[];
for(i in Original_list){
    for(j in Original_list[i]){
        if(i==0){
            new_list.splice(j,1,Original_list[i][j])
        }
        else{
            new_list.splice(j,1,new_list[j]+Original_list[i][j])
        }
    }
}
console.log(new_list);