Hello.Zh = function() {
    Hello.En.call(this);
    this._greeting = '世界的朋友们，你们好！';
}

Hello.Zh.prototype = new Hello.En();