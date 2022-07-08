// Write a Python program to join adjacent members of a given list.
// Original list:
// ['1', '2', '3', '4', '5', '6', '7', '8']
// Join adjacent members of a given list:
// ['12', '34', '56', '78']
// Original list:
// ['1', '2', '3']
// Join adjacent members of a given list:
// ['12']

const Original_list=['1', '2', '3', '4', '5', '6', '7', '8'];
let new_list=[];
for(i=0;i<Original_list.length;i+=2){
    join=Original_list[i]+Original_list[i+1]
    new_list.push(join)
}
console.log(new_list);