// Convert Character Matrix to single String;
// The original list is: [ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
// The String after join: gfgisbest


original_list=[ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
let join=""
for(i of original_list){
    for(j of i){
        join+=j
    }
}
console.log(join);