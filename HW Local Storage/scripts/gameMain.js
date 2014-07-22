/*jslint browser:true */
/*jslint devel:true */
(function() {
    'use strict';

    var inputBox = document.getElementById('inputBox'),
        button = document.getElementById('btn'),
        MIN_NUM_VALUE = 1000;


    button.addEventListener('click', function() {
        var input = inputBox.value;

        if (game.validateInput(input) === -1) {
            alert("Invalid Input!");
        } else {
            game.compareInput(input);
            inputBox.value = "";
        }
    });

}());