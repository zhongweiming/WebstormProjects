var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby))/gi;

var match = pattern.exec(text);
console.log(match);
console.log(match.index);
console.log(match.input);
console.log(match[0]);
console.log(match[1]);
console.log(match[2]);
console.log(match[3]);

console.log(pattern.valueOf());
console.log(pattern.toLocaleString());
console.log(pattern.toString());
console.log(pattern.source);


var str = "this has been a short summer";
var pattern2 = /(.)hort/g;

if(pattern2.test(str)) {
    console.log(RegExp.input);
    console.log(RegExp.lastMatch);
    console.log(RegExp.lastParen);
    console.log(RegExp.leftContext);
    console.log(RegExp.rightContext);
}

var s = "xx";
var str = new String("xx");
var str2 = new String("嗯嗯");
console.log(typeof s);
console.log(typeof str);
console.log(str2.length);
console.log(s[1]);

var result = s.replace("x","ji");
console.log(result);

var ss = "blue,red,green,grey";
var color = ss.split(/[^,]+/);//以除,外的所有字符分割，原来如此，所以会有空串，且能输出所有逗号。
console.log(color);

var sss = "xix?haha?hehe";
var hehe = sss.split(/[^?]+/);//表明在方括号里是不需要转义的
console.log(hehe);