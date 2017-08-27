var En = require('./en.js');

var Ja = function() {
    En.call(this);
    this._greeting = '世界の皆さん、こんにちは！';
}

Ja.prototype = new En();

module.exports = Ja;