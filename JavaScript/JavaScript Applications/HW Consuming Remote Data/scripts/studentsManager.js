define(['jquery','ui'], function($, ui) {
    
    var studentsUrl= 'http://localhost:3000/students/';
    
    var addStudent = function (data) {
        $.post(studentsUrl,data, function (){
        });
        
        getAllStudents();
    };
    
    var getAllStudents = function() {
        $.getJSON(studentsUrl, function(data) { 
            ui.printStudents(data);
        });
        
    };
    
    var deleteStudent = function(id) {
        var studentUrl = studentsUrl +id;
        
        $.ajax({
            url: studentUrl,
            type: 'POST',
            success: ui.success,
            error: ui.error,
            timeout:5000,
            data:{_method: 'delete'}
        });
    };

    return {
        addStudent: addStudent,
        getAllStudents:getAllStudents,
        deleteStudent: deleteStudent
    };
});