function f() {
    let print;
    for(let i=0;i<3;i++){
        if(i==2){
            print=function () {
                return i;
            };
        }
    }
    console.log(print());
}
f();