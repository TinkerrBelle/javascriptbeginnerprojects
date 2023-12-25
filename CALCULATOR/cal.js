"use strict";

var result = document.getElementById('result'),

number = document.querySelectorAll('.numbers'),

sign = document.querySelectorAll('.signs div'),

equal = document.getElementById('equal'),

clear = document.getElementById('clear'),

resultDisplayed = false;


//adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(e){
        //storing current input string and its last character in variables to be used later
        var currentString = result.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        //if result is not displayed, just keep adding
        if (resultDisplayed === false) {
            result.innerHTML += e.target.innerHTML;
        }
        else if (resultDisplayed === true && lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷') {
            //if result is currently displayed and user pressed an operator
            //we need to keep adding to the string and add the new input to start the new operation
            resultDisplayed = false;
            result.innerHTML = '';
            result.innerHTML += e.target.innerHTML;
        }
    });
}


//adding click handlers to number buttons
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(e){
        //storing current input string and its last character in variable to be used later
        var currentString = result.innerHTML;
        var lastChar = currentString[currentString - 1];

        //if last character entered is an operator, replace it with the currently pressed one
        if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷') {
            var newString = currentString.substring( 0, currentString.length - 1 ) + e.target.innerHTML;
            result.innerHTML = newString;
        }
        else if (currentString.length == 0) {
            //if first key pressed is an operator, don't do anything
            console.log('enter a number first');
        }
        else {
            //else just add the operator pressed to the input
            input.innerHTML += e.target.innerHTML;
        }

        
    });
}


// on Click of 'equal' button
equal.addEventListener('Click', function() {

    //this is the string that we will be processing E.G: -10+26+33-56*34/23
    var inputString = result.innerHTML;

    // forming an array of numbers. E.G for the above string it will be: numbers = ['10'. '26', '33', '56', '34', '23']
    var numbers = inputString.split(/\+|\-|\x|\÷/g);

    // forming an array of operators for above string it will be: operators = ['+', '+', '-', '*', '/']
    // first we replace all the numbers and dot with empty string and then split
    var operators = inputString.replace(/[0-9]|\./g, '').split('');

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log('---------------------------------');

    //now we are looping through the array and doing one operation at a time.
    // first divide, then multiply, then subtract and then add
    // as we move we are altering the original numbers and operators array
    // the final element remaining in the array wil be the output

    var divide = operators.indexOf('÷');
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf('÷');
    }

    var multiply = operators.indexOf('x');
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf('x');
    }

    var subtract = operators.indexOf('-');
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] * numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf('-');
    }

    var add = operators.indexOf('+');
    while (add != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf('+');
    }

    
    result.innerHTML = number[0]; //displaying the output

    resultDisplayed = true; //turning flag if result is displayed
});

// clearing the input on press clear
clear.addEventListener('click', function() {
    result.innerHTML = '';
})
