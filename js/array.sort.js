var arr = [1,3,5,43,2,45,10];
var arr_sort1 = arr.sort();
var arr_sort2 = arr.sort(compare);//这里传入compare还能影响上面的排序，amazing
console.log(arr_sort1);
console.log(arr_sort2);

function compare(value1,value2) {
    return value1-value2;
}