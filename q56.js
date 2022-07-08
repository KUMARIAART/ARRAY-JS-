// Write a Python program to convert a given list of strings into list of lists. 
// Original list of strings:
// ['Red', 'Maroon', 'Yellow', 'Olive']
// Convert the said list of strings into list of lists:
// [['R', 'e', 'd'], ['M', 'a', 'r', 'o', 'o', 'n'], ['Y', 'e', 'l', 'l', 'o', 'w'], ['O', 'l', 'i', 'v', 'e']]

const Original_list_of_strings=['Red', 'Maroon', 'Yellow', 'Olive'];
let list1=[];
for(i of Original_list_of_strings){
    let list2=[];
    for(j of i){
        list2.push(j)
    }
    list1.push(list2)
}
console.log(list1);