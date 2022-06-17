// Question9
// Write a program to check the second max of the array, and console it.
var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max=0;
var second_max=0;


for(var i=0; i<numbers.length;i++){
    if (numbers[i]>max){
        second_max=max
        max=numbers[i]
    }
    else if(numbers[i]>second_max){
        second_max=numbers[i]
    }
}
console.log(second_max);
 