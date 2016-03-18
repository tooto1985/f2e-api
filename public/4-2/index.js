﻿$(function() {
    $("#name").keyup(function() {
        $("#status").removeClass().addClass("loading");
        $.getJSON("http://127.0.0.1:3000/api/4-2", { username: $("#name").val() }, function (data) {
            if (data) {
                $("#status").removeClass().addClass("no");
            } else {
                $("#status").removeClass().addClass("ok");
            }
        });
    });
    $("#register").click(function() {
        $.getJSON("http://127.0.0.1:3000/api/4-2", { username: $("#name").val(), isregister: true }, function (data) {
            if (data) {
                alert("註冊成功!");
            } else {
                alert("註冊失敗!");
            }
        });
    });
});