// Write a Python program to remove all the values except integer values from a given array of 
// mixed values. 
// Original list: [34.67, 12, -94.89, 'Python', 0, 'C#']
// After removing all the values except integer values from the said array of mixed values:[12, 0]

Original_list=[34.67, 12, -94.89, 'Python', 0, 'C#']
// for(i of Original_list){
//     if(typeof (i)!=String){
//         console.log(i);
//     }
    
// }
arr=Original_list.filter(Number) 
console.log(arr);


