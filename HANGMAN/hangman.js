window.onload = function () {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var categories; // Array of topics
    var chosenCategory; // Selected category
    var getHint; // Word getHint
    var word; // Selected word
    var guess; // Guess
    var guesses = [ ]; // Stored guesses
    var space; // Number of spaces in word '-'

    // Get elements
    var showLives = document.getElementById('mylives');
    var showCategory = document.getElementById('scatagory');
    var getHint = document.getElementById('hint');
    var showClue = document.getElementById('clue');

    // create alphabet ul
    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();

            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Select Category
    var selectCat = function () {
        if (chosenCategory === categories[0]) {
            categoryName.innerHTML = 'The Chosen CAtegory Is Premier League Football Teams';
        } 
        else if (chosenCategory === categories[1]) {
            categoryName.innerHTML = 'The Chose Category Is Films';
        }
        else if (chosenCategory === categories[2]) {
            categoryName.innerHTML = 'The Chose Category Is Cities';
        }
    }


    // Create guesses ul
    result = function () {
        wordHolder = document.getElementsById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === '-') {
                guess.innerHTML = '-';
                space = 1;
            } else {
                guess.innerHTML = '-';
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess)
        }
    }


    // Show Lives
}