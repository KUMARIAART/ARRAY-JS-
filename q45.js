// Write a Python program to pair up the consecutive elements of a given list.
// Original lists:
// [1, 2, 3, 4, 5, 6]
// Pair up the consecutive elements of the said list:
// [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]]
// Original lists:
// [1, 2, 3, 4, 5]
// Pair up the consecutive elements of the said list:
// [[1, 2], [2, 3], [3, 4], [4, 5]]

const Original_lists=[1, 2, 3, 4, 5, 6];
main_list=[]
for (i=1;i<Original_lists.length;i++){
    list=[]
    list.push(Original_lists[i-1],Original_lists[i])
    main_list.push(list)
}
console.log(main_list)

