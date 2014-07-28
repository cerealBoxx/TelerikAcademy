define(['jquery', 'handlebars'], function($, Handlebars) {
    
    var source = $("#handlebars-template").html(),
        template = Handlebars.compile(source);
    
    var printStudents = function(data) {
        
        var html = template({students:data.students});    
        
        $("#students-display").html(html);
    };
    
    var success = function () {
        console.log("Success!");
    };
    
    var error = function () {
      console.log('Error!');  
    };
    
    return {
        printStudents:printStudents,
        success:success,
        error: error
    };
});