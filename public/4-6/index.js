$(function() {
    var current = 0;
    function getArticle(num, fetch) {
        $.getJSON("http://127.0.0.1:3000/api/4-6", {
                fetch: fetch, //一次抓取幾筆
                num: num //抓取大於此編號
            }, function(data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += "<div>";
                    html += "<div>" + data[i].title + "</div>";
                    html += "<div>" + data[i].content + "</div>";
                    html += "</div>";
                    current = data[i].num;
                }
                $(".box").append(html);
            });
    }
    $("#more").click(function() {
        getArticle(current, 3);
    });
    getArticle(current, 5);
});