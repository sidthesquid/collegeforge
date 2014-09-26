$(".list-group input").keyup(function() {
    var filter = $(this).val();
    $("#selectList a").each(function() {

        var match = $(this).text().search(new RegExp(filter, "i"));
        //alert(match);
        if (match < 0 && $(this).text())  {                   
            $(this).slideUp();

        } else {
            $(this).slideDown();

        }


    });
});