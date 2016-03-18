$(function() {
    $("#name").keyup(function() {
        $("#status").removeClass().addClass("loading");
        $.getJSON("http://127.0.0.1:3000/api/4-1", { username: $("#name").val() }, function (data) {
            if (data) {
                $("#status").removeClass().addClass("no");
            } else {
                $("#status").removeClass().addClass("ok");
            }
        });
    });
});