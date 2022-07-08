// Write a Python program to concatenate element-wise three given lists. 
// Original lists:
// ['0', '1', '2', '3', '4']
// ['red', 'green', 'black', 'blue', 'white']
// ['100', '200', '300', '400', '500']
// Concatenate element-wise three said lists:
// ['0red100', '1green200', '2black300', '3blue400', '4white500']
const list1=['0', '1', '2', '3', '4'];
const list2=['red', 'green', 'black', 'blue', 'white'];
const list3=['100', '200', '300', '400', '500'];
let new_list=[];
for(i in list1){
    let sum=0;
    sum+=list1[i]+list2[i]+list3[i]
    new_list.push(sum)
}
console.log(new_list);

