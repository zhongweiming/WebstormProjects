var book = {
    "title":"professional javascript",
    "authors":["nico","hello"],
    edtion:3,
    year:2011
    // ,
    //  toJSON: function() {
    //      return this.authors;
    //  }
};
var jsonText = JSON.stringify(book);
var jsonParse = JSON.parse(jsonText);
console.log(jsonText);
console.log(jsonParse);
console.log(typeof jsonParse);
console.log(jsonParse==book);//转换回来是不一样