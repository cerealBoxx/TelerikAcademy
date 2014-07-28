define(['jquery', 'ui'], function($, ui, httpRequester) {
    var chatUrl = "http://crowd-chat.herokuapp.com/posts";

    var addMessage = function(data) {
       $.post(chatUrl, data, function(){
           console.log("success");
       });
    };
    
    var updateChat = function (){
        setTimeout(getAllMessages, 5000);
    };

    var getAllMessages = function() {
        $.getJSON(chatUrl, function(data) {
            ui.printMessages(data);
        });
        
        updateChat();
    };
    
    return {
        addMessage:addMessage,
        getAllMessages:getAllMessages
    };
});