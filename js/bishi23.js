for(var i = 0;i < 3;i++){
    setTimeout(() => {
        console.log(i);
    },(function () {
        var b=i*1000;
        console.log(b);
        return b;
    })())
}