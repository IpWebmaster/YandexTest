(function () {

    $("#form1").on("change", init);
    $("#form2").on("change", init);

    function init() {
        var results = compareForm($("#form1"), $("#form2"));
        $("#result").empty();
        for (var el in results.change) {
            var str = "Изменился параметр '" + el + "' старое значение '" + results.change[el].oldValue + "', новое значение '" + results.change[el].newValue + "'";
            $("#result").append("<div>" + str + "</div>");
        }
        for (var el in results.add) {
            var str = "Добавился новый параметр '" + el + "', его значение '" + results.add[el].value + "'";
            $("#result").append("<div>" + str + "</div>");
        }

        for (var el in results.remove) {
            var str = "Удален параметр '" + el + "', его значение '" + results.remove[el].value + "'";
            $("#result").append("<div>" + str + "</div>");
        }
    }
})();

function compareForm(form1, form2) {
    var result = {
        "change": {},
        "remove": {},
        "add": {}
    };
    var sForm1 = form1.serializeArray();
    var sForm2 = form2.serializeArray();
    for (var i in sForm1) {
        var item1 = sForm1[i];
        for (var j in sForm2) {
            var item2 = sForm2[j];
            if (item1.name === item2.name) {
                if (item1.value !== item2.value) {
                    if (typeof result["change"][item1.name] != 'object') {
                        result["change"][item1.name] = [];
                    }
                    result["change"][item1.name] = {
                        "oldValue": item1.value,
                        "newValue": item2.value
                    };
                }
                delete sForm1[i];
                delete sForm2[j];
            }
        }
    }
    for (var key in sForm1) {
        result["remove"][sForm1[key].name] = {
            "value": sForm1[key].value
        };
    }
    for (var key in sForm2) {
        result["add"][sForm2[key].name] = {
            "value": sForm2[key].value
        };
    }

    return result;

}