// List product excluding duplicates.
// List = [6,1,3,5,6,3,1]

List=[6,1,3,5,6,3,1]
let new_list=[];
let product=1;
for(i of List){
    if(!new_list.includes(i)){
        new_list.push(i)
        product*=i
    }
}
console.log(product);

