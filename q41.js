// Find the sum of number digits in List.
// The original list is : [12, 67, 98, 34]
// List Integer Summation : [3, 13, 17, 7]
// Explanation: 1+2 = 3, 6+7=13, 9+8=17, 3+4=7

// The original list is : [15, 81, 11, 234]
// List Integer Summation : [6,9,2,9]

let original_list=[12, 67, 98, 34];
let new_list=[];
for(i of original_list){
    let sum=0;
    for(j=i;0<j;j=Math.floor(j/10)){
        a=j%10
        sum=sum+a
    }
    new_list.push(sum)

}
console.log(new_list);



