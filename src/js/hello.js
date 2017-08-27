var En = require('./hello/en.js');
var Ja = require('./hello/ja.js');
var Zh = require('./hello/zh.js');

var Hello = function(lang) {

    function getlanguage(lang) {
        if (!lang) return;
        if (lang = lang.match(/^\w+/)) return lang[0];
    }
    
    lang = getlanguage(lang);
    
    return lang == 'ja' ? new Ja()
         : lang == 'zh' ? new Zh()
         :                new En();
}

module.exports = Hello;