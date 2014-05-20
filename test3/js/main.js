function compareForm(form1, form2){

    var sForm1 = form1.serializeArray();
    var sForm2 = form2.serializeArray();
    for(var i = 0; i < sForm1.length; i++) {
        console.log(sForm1[i]);
    }
}