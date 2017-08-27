var En = function() {
    this._greeting = 'Hello, world!';
}

En.prototype.say = function() {
    return this._greeting;
}

module.exports = En;