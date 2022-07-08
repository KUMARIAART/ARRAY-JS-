// Remove empty List from List		
// The original list is: [5, 6, [], 3, [], [], 9]
// List after empty list removal: [5, 6, 3, 9]


var original_list=[5, 6, [], 3, [], [], 9]
// var arr=original_list.filter(function(e){return e});
// var j=[]
// for (var i=0;i<original_list.length;i++){
//     if(original_list[i]!=[]){
//         j.push(original_list[i])
//     }
// }
// console.log(j);
arr=original_list.filter(Number) 
console.log(arr);