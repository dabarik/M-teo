// KEY dd238b55617b3a3aa921458bac5c09a6

// http://api.openweathermap.org/data/2.5/weather?q=paris&appid=dd238b55617b3a3aa921458bac5c09a6&units=metric


$(document).ready(function () {
    $("#send").click(function() {
    $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q="+ document.getElementById('content').value +"&appid=dd238b55617b3a3aa921458bac5c09a6&units=metric",

            success: function (result) {
                console.log(result)
                var name = document.getElementById('content').value;

                $("#city").html("<strong>" + result.name + result.main.temp + "</strong> degres");
            }
        });
    });
});