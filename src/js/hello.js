Hello = function(lang) {

    function getlanguage(lang) {
        if (!lang) return;
        if (lang = lang.match(/^\w+/)) return lang[0];
    }
    
    lang = getlanguage(lang);
    
    return lang == 'ja' ? new Hello.Ja()
         : lang == 'zh' ? new Hello.Zh()
         :                new Hello.En();
}