function timeout(ms) {
    return new Promise((resolve, reject) => {
        if(ms>3000){//表示成功
            setTimeout(resolve, ms, 'done');
        }else{//表示失败
            setTimeout(reject,ms,'ao,error');
        }
    });
}
timeout(4000).then((value) => {
    console.log(value);
},(error) => {
    console.log(error);
});
