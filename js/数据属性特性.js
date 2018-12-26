var person = {
    name:"peter"
}
Object.defineProperty(person,"name",{
    configurable:false
})
delete person.name;//不能删除
// Object.defineProperty(person,"name",{
//     configurable:true
// })//报错不能修改特性
Object.defineProperty(person,"name",{
    writable:false
})//writable可以改为false
Object.defineProperty(person,"name",{
    writable:true
})//但是不能再改回true，会报错
person.name = "mary";
console.log(person.name);
Object.defineProperty(person,"age",{
    value:20
});
console.log(person.age);