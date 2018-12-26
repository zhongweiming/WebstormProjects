console.log(typeof NaN === "number");
console.log(NaN === NaN);
console.log(0.1+0.2);//因为0.1转换成二进制时不能整除，最后会取一个近似值，这个值被认为和0.3不一样，so
console.log(0.1+0.2==0.3);
console.log('12'==12);
console.log('12'===12);
console.log(0.10000000000000001);
console.log(0.30000000000000001);
//精度问题最好的解决办法就是先乘再除
console.log((0.1*10+0.2*10)/10);