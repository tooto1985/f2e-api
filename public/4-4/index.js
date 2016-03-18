﻿$(function() {
    $("#search").keydown(function(e) {
        function getIndex(index,length) {
            if (index < 0) {
                index = length - 1;
            } else if (index >= length) {
                index = 0;
            }
            return index;
        }
        function getTop(index,top) {
            if (top < 0) {
                return index * 30;
            } else if (top > 270) {
                return (index - 9) * 30;
            }
        }
        function getAdd(index, keyCode) {
            if (keyCode == 40) {
                return ++index;
            }
            return --index;
        }
        if (e.keyCode == 40 || e.keyCode == 38) {
            var index = $("a.selected").removeClass().index();
            index = getAdd(index,e.keyCode);
            index = getIndex(index,$(".list>a").length);
            var top = $(".list>a").eq(index).addClass("selected").position().top;
            $(".list").scrollTop(getTop(index,top));
        }
        if (e.keyCode == 13) {
            $("a.selected").click();
        }
    });
    $(".list").on("mouseenter click","a",function(e) {
        if (e.type=="click") {
            $("#search").val($("a.selected").text());
            $(".list").hide();
        } else {
            $("a.selected").removeClass();
            $(this).addClass("selected");            
        }
    });
    $("#search").keyup(function(e) {
        if (e.keyCode != 40 && e.keyCode != 38 && e.keyCode != 13) {
            var value = $(this).val().trim();
            if (value) {
                $.getJSON("http://127.0.0.1:3000/api/4-4", {
                    search: value
                }, function(data) {
                    if (data.length > 0) {
                        var html = "";
                        for (var i = 0; i < data.length; i++) {
                            html += "<a>" + data[i] + "</a>";
                        }
                        $(".list").html(html).show();
                    } else {
                        $(".list").hide();
                    }
                });
            } else {
                $(".list").hide();
            }
        }
    });
});