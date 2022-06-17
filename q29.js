// // Write a Python program to scramble the letters of string in a given list. 
// // Original list:
// // ['Python', 'list', 'exercises', 'practice', 'solution']
// // After scrambling the letters of the strings of the said list:
// // ['tnPhyo', 'tlis', 'ecrsseiex', 'ccpitear', 'noiltuos']

// let Original_list=['Python', 'list', 'exercises', 'practice', 'solution'];
// let new_list=[];
// for(i of new_list)[
//     scram=
// ]
function solve(arr , rotation){
    if (rotation==0)return arr;
    for (let i=0;i<rotation;i++){
        let element=arr.pop();
        arr.unshift(element);
    }
    return arr;
}
console.log(solve([144,1,22,111],5))