"use strict";
var stringBuilder = (function () {
    function stringBuilder(input) {
        this.data = input;
    }
    stringBuilder.prototype.getString = function () {
        return this.data;
    };
    stringBuilder.prototype.setString = function (data) {
        this.data = data;
    };
    stringBuilder.prototype.reverse = function () {
        var chars = this.data.split('');
        for (var i = 0; i < chars.length / 2; i++) {
            var cTmp = chars[i];
            var cTmp2 = chars[chars.length - i - 1];
            chars[i] = cTmp2;
            chars[chars.length - i - 1] = cTmp;
        }
        this.data = chars.join('');
    };
    return stringBuilder;
}());
var word = new stringBuilder('Maddy Austin');
console.log(word.getString());
word.setString("Maddy");
console.log(word.getString());
word.reverse();
console.log(word.getString());
//# sourceMappingURL=stringBuilder.js.map