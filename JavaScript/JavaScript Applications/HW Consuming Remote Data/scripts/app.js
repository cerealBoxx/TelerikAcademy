(function() {
    require.config({
        paths: {
            "jquery": "libs/jquery",
            "handlebars": "libs/handlebars-v1.3.0"

        },
        shim: {
            'handlebars': {
                exports: 'Handlebars'
            }
        }
    });

    require(['jquery', 'studentsManager'], function($, studentsManager) {
        
        studentsManager.getAllStudents();

        $('#student-form').on('submit', function(e) {
            var data = $(this).serialize();
            e.preventDefault();
            console.log(data);
            studentsManager.addStudent(data);
        });
        
        $('#delete-form').on('submit', function(e) {
            var studentID = $(this).find("#delete-student-input").val();
            studentsManager.deleteStudent(studentID);
            studentsManager.getAllStudents();
            e.preventDefault();
        })
    });
}());