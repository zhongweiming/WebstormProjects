var array = [20,30,40,20,10,10,50,50,20];
var unique = [];
//use a new array to contain the array after duplicates remove,the source array will not change
// for(let i = 0;i < array.length;i++){
//     if(unique.indexOf(array[i])==-1){
//         unique.push(array[i]);
//     }
// }
// console.log(unique);

//delete the duplicates in the source array
for(let i = 0;i < array.length;i++){
    if(unique.indexOf(array[i])===-1){
        unique.push(array[i]);
    }else{
        array.splice(i,1);
        i--;//because the current index was deleted
    }
}
console.log(array);