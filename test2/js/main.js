function getUrlObject(url) {
    var a = document.createElement('a');
    a.href = url;
    return a;
}

function serializeParams(obj) {
    var str = [];
    for (var param in obj) {
        if (obj.hasOwnProperty(param)) {
            if (typeof obj[param] === 'object') {
                for (var key in obj[param]) {
                    str.push(encodeURIComponent(param) + "[]=" + encodeURIComponent(obj[param][key]));
                }
            } else {
                str.push(encodeURIComponent(param) + "=" + encodeURIComponent(obj[param]));
            }
        }
    }
    return str.join("&");
}

function addParamsToUrl(url, params){
    var urlObject = getUrlObject(url);
    if(urlObject.search === "") {
        var p = '?' + params;
    }else{
        var p = urlObject.search + "&" + params;
    }
    return urlObject.protocol + "//" + urlObject.hostname + urlObject.pathname + p;
}

var obj = {
    "img": 33,
    "text": "Текст",
    "params": [31, 32]
};

var params = serializeParams(obj);
var url = addParamsToUrl("http://mysite.ru/test.php/?oldparams=45", params);
console.log(url);