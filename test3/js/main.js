function compareForm(form1, form2){
    var result = {
        "change" : {},
        "remove" : {}
    };
    var sForm1 = form1.serializeArray();
    var sForm2 = form2.serializeArray();
    for(var i = 0; i < sForm1.length; i++) {
        var item1 = sForm1[i];
        for(var j = 0; j < sForm2.length; j++) {
            var item2 = sForm2[j]
            if((item1.name === item2.name) && (item1.value !== item2.value)) {
                if (typeof result["change"][item1.name] != 'object') {
                    result["change"][item1.name] = [];
                }
                result["change"][item1.name] = {
                    "Old" : item1.value,
                    "New" : item2.value
                };
            }
        }
    }
    console.log(result);
}