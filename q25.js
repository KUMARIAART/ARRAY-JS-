// Count unique values inside a list.
// input_list = [1, 2, 2, 5, 8, 4, 4, 8]
// Count = 5 #because [1,2,5,8,4] are unique values.

let input_list = [1, 2, 2, 5, 8, 4, 4, 8]
let count=0;
let new_list=[];
for(i of input_list){
    if(!new_list.includes(i)){
        new_list.push(i)
        count+=1
    }
}
console.log(count);