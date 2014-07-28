(function(){
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
    
    require(["jquery", "chatManager"], function($, chatManager){
        
        chatManager.getAllMessages();
        
        $('#input-form').on('submit', function(e) {
            var data = $(this).serialize();
            $("#txt-area").val("");
            chatManager.addMessage(data);
            chatManager.getAllMessages();
            e.preventDefault();
        });
    });
    
}());