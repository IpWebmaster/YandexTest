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
    return url + '?' + params;
}

var obj = {
    "img": 33,
    "text": "Текст",
    "params": [31, 32]
};

var params = serializeParams(obj);
var url = addParamsToUrl("http://mysite.ru/test.php", params);