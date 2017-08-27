Hello.En = function() {
    this._greeting = 'Hello, world!';
}

Hello.En.prototype.say = function() {
    return this._greeting;
}
