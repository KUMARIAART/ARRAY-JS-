//Find the First Maximum, Second maximum, Third maximum number from the List.

List=[60,140,30,50,60,30,10,100]
let first_max=0;
let second_max=0;
let third_max=0;
for(i of List){
    if(first_max<i){
        third_max=second_max
        second_max=first_max
        first_max=i
    }
    else if(second_max<i){
        third_max=second_max
        second_max=i
    
    }
    else if(third_max<i){
        third_max=i
    }

    
}
    
console.log(first_max);
console.log(second_max);
console.log(third_max);
