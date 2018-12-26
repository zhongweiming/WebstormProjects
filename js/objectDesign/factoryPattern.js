// create object factory pattern
function createObject(name,sex,age) {
    var person = new Object();
    person.name = name;
    person.sex = sex;
    person.age = age;
    person.eat = function () {
        console.log("eat eat eat!"+this.name);
    }
    return person;
}
var peop1 = createObject("peter","male",18);
var peop2 = createObject("marry","female",18);
console.log(peop1.name,peop1.sex,peop1.age);
peop1.eat();
console.log(peop2.name,peop2.sex,peop2.age);

//create customized object
function People(name,sex,age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.sayHello = function () {
        console.log("Hello ,I'm "+this.name);
    }
}
var people1 = new People("Peter","male",18);
var people2 = new People("Marry","female",18);
console.log(people1.name,people1.age,people1.sex);
people1.sayHello();
console.log(people1 instanceof People);
//var ma = new Math();//Error Math is not a constructor
var array = new Array();
console.log(Array.length); 
console.log(Array.isArray(array));//there are some static method in Array
