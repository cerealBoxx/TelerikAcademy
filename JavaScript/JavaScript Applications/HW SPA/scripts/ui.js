define(['jquery', 'handlebars'], function($, Handlebars) {

    var source = $("#template").html(),
        template = Handlebars.compile(source);

    var printMessages = function(data) {
        //var lastData = data.slice(data.length-11,data.length);
                                  
        var html = template({
            data: data.slice(data.length-11,data.length)
        });
        $("#messages").html(html);
    };

    var success = function() {
        console.log("Success!");
    };

    var error = function() {
        console.log('Error!');
    };

    return {
        printMessages: printMessages,
        success: success,
        error: error
    };
});