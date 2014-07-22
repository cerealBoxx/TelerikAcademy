var game = (function() {

    //private
    var turns = 0;
    var highScoreTable = document.createElement('table'),
        headerRow = document.createElement('tr'),
        playerNameCol = document.createElement('th'),
        playerScoreCol = document.createElement('th');
    playerNameCol.innerHTML = "Player";
    playerScoreCol.innerHTML = "Score";
    headerRow.appendChild(playerNameCol);
    headerRow.appendChild(playerScoreCol);
    highScoreTable.appendChild(headerRow);



    var generateSecretNumber = function() {
        var rand = Math.floor(Math.random() * 8999 + 1000);
        while (!hasUniqueChars(rand.toString())) {
            rand = Math.floor(Math.random() * 8999 + 1000);
        }

        return rand;
    };

    var hasUniqueChars = function(str) {
        var isUnique = false;
        for (var i = 0; i < str.length - 1; i += 1) {
            if (str.indexOf(str[i], i + 1) === -1) {
                isUnique = true;
            } else {
                isUnique = false;
                return;
            }
        }
        return isUnique;
    };

    var secretNumber = generateSecretNumber();
    console.log(secretNumber);

    var addToHighScoreList = function() {

    };

    //public
    var outputDiv = document.getElementById("output");

    var validateInput = function(str) {
        var retValue = -1;
        if (str !== null) {
            if (str.length === 4) {
                if (!isNaN(str) && Number(str) > 1000 && hasUniqueChars(str)) {
                    retValue = parseInt(str);
                }
            }
        }

        return retValue;
    };

    var compareInput = function(input) {

        var rams = 0;
        var sheep = 0;
        var lsArray = [];

        secretNumber = secretNumber.toString();


        if (input === secretNumber) {
            turns++;
            var player = prompt("YOU WON! Please enter your name");

            if (player === null) {
                player = "Anonymous";
            }

            localStorage.setItem(player, turns);

            for (var key in localStorage) {
                lsArray.push([key, localStorage.getItem(key)]);
            }
            lsArray.sort(function(a, b) {
                return a[1] - b[1];
            });

            for (var i = 0; i < lsArray.length; i++) {
                var row = document.createElement('tr');
                var playerCol = document.createElement('td');
                var playerScoreCol = document.createElement('td');

                var score = lsArray[i][1];
                player = lsArray[i][0];
                playerCol.innerHTML = player;
                playerScoreCol.innerHTML = score;
                row.appendChild(playerCol);
                row.appendChild(playerScoreCol);
                highScoreTable.appendChild(row);
            }

            outputDiv.innerHTML = "";
            outputDiv.appendChild(highScoreTable);



        } else {
            turns++;
            for (var i = 0; i < input.length; i++) {
                if (input[i] === secretNumber[i]) {
                    rams++;
                } else if (secretNumber.indexOf(input[i]) > -1) {
                    sheep++;
                }
            }
            var p = document.createElement('p');
            p.innerHTML = input + ": You have " + rams + " rams and " + sheep + " sheep";
            outputDiv.appendChild(p);

        }
    };

    return {
        validateInput: validateInput,
        compareInput: compareInput
    };
}());