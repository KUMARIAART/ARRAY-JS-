// Write a Python program to check if first digit/character of each element in a given list is
// same or not.
// Original list:
// [1234, 122, 1984, 19372, 100]
// Check if first digit in each element of the said given list is same or not!
// True
// Original list:
// [1234, 922, 1984, 19372, 100]
// Check if the first digit in each element of the given list is the same or not!
// False
// Original list:
// ['aabc', 'abc', 'ab', 'a']
// Check if first character in each element of the said given list is same or not!
// True
// Original list:
// ['aabc', 'abc', 'ab', 'ha']
// Check if first character in each element of the said given list is same or not!
// False

// let Original_list=[1234, 122, 1984, 19372, 100];
// let Original_list=['aabc', 'abc', 'ab', 'ha']
let Original_list=['aabc', 'abc', 'ab', 'a']
let num=String(Original_list[0])
num=num[0]
let count=0;
for(i of Original_list){
    number=String(i)
    if(number[0]===num){
        count+=1
    }
}
if(count==Original_list.length){
    console.log(true);
}
else{
    console.log(false);
}