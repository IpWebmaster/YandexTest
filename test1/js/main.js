function getUrlObject(url) {
    var a = document.createElement('a');
    a.href = url;
    return a;
}

function parseUrl(url) {
    var result = {};
    var urlObject = getUrlObject(url);
    var queryParams = urlObject.search.replace(/^\?/, '');
    var params = queryParams.split('&');
    for (var i = 0; i < params.length; i++) {
        if (!params[i]) continue;
        var param = params[i].split('=');
        var paramName = decodeURIComponent(param[0]),
            paramValue = decodeURIComponent(param[1]);
        if (paramName.search(/\[\]/) > 0) {
            paramName = paramName.replace('[]', '');
            if (typeof result[paramName] != 'object') {
                result[paramName] = [];
            }
            result[paramName].push(paramValue);
        } else {
            result[paramName] = paramValue;
        }
    }
    return result;
}

parseUrl('http://mysite.ru/test.php?img=33&text=Текст&params[]=12&params[]=13');