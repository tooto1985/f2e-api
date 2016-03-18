$(function() {
    function sendMessage(message) {
        if (!message) {
            $.getJSON("http://127.0.0.1:3000/api/4-9", function(data) {
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        $(".box").append("<div>" + data[i] + "</div>");
                    }
                    $(".box").animate({ "scrollTop": $(".box").prop("scrollHeight") - $(".box").height() }, 200);
                }
                sendMessage();
            });
        } else {
            $.getJSON("http://127.0.0.1:3000/api/4-9", { name: $("#name").val(), message: message });
            $("#message").val("");
        }
    }
    $("#send").click(function() {
        sendMessage($("#message").val());
    });
    $("#message").keyup(function(e) {
        if (e.keyCode == 13) {
            sendMessage($("#message").val());
        }
    });
    sendMessage();
});