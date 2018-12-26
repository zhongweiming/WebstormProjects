var foo = 'a';
function bar() {
    console.log(foo);
    var foo = 'b';
}
bar();