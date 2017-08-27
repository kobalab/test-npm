Hello.Ja = function() {
    Hello.En.call(this);
    this._greeting = '世界の皆さん、こんにちは！';
}

Hello.Ja.prototype = new Hello.En();