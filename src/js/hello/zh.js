var En = require('./en.js');

var Zh = function() {
    En.call(this);
    this._greeting = '世界的朋友们，你们好！';
}

Zh.prototype = new En();

module.exports = Zh;