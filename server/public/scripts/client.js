console.log('hello from js');

$(document).ready(onReady);

function onReady() {
    getData();
    console.log('Hello from jQuery');
    // $('.operator').on('click', gatherInputs);
    $('#clear').on('click', clearInputs);
    $('#submit').on('click', sendData);
    $('.operator').on('click', chooseOperator);        
                  // I am unclear where to place these click listeners
}

function chooseOperator() {
    if($(this).val() === '+') {
        operator = '+';
        console.log('operator is', operator);
    }
    if($(this).val() === '-') {
        operator = '-';
        console.log('operator is', operator);
    }
    if($(this).val() === '*') {
        operator = '*';
        console.log('operator is', operator);
    }
    if($(this).val() === '/') {
        operator = '/';
        console.log('operator is', operator);
    }
    return operator;
}

function sendData(){
    if($('#firstNumber').val().length == 0 || $('#secondNumber').val().length == 0) {
        console.log('Inputs are empty');
        alert('Please enter both numbers into input boxes.');
    }
    console.log('in POST sendData');
        console.log(numberCruncher([{
        inputOne: $('#firstNumber').val(),
        inputTwo: $('#secondNumber').val(),        
        operator: operator}]));
    $.ajax( {
        method: 'POST',
        url: '/numberMunchers',
        data: {
            inputOne: $('#firstNumber').val(),
            inputTwo: $('#secondNumber').val(),        
            operator: operator,
        }
    }).then(function(response) {
        console.log('response', response);
        getData();
    }).catch(function(error) {
        alert(error);
    });
}

function getData() {
    $.ajax( {
        method: 'GET',
        url: '/numberMunchers'
    }).then(function(response){
        console.log('response', response);
        appendDOM(response);
    });
}

function appendDOM(dataToAppend){
    $('#calcHistory').empty();
    // let append = dataToAppend;
        $('#calcHistory').append('<li>helloworld</li>');
}

function clearInputs(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}

function numberCruncher(array) {
    for(i = 0; i < array.length; i++) {
        if(array[i].operator === '+') {
            let inputOne = array[i].inputOne;
            let inputTwo = array[i].inputTwo;
            let result = parseFloat(inputOne) + parseFloat(inputTwo);
            console.log('numberCruncher result is ', result);
            return result;
        }
        else if(array[i].operator === '-') {
            let inputOne = array[i].inputOne;
            let inputTwo = array[i].inputTwo;
            let result = inputOne - inputTwo;
            console.log('numberCruncher result is ', result);
            return result;
        }
        else if(array[i].operator === '*') {
            let inputOne = array[i].inputOne;
            let inputTwo = array[i].inputTwo;
            let result = inputOne * inputTwo;
            console.log('numberCruncher result is ', result);
            return result;
        }
        else if(array[i].operator === '/') {
            let inputOne = array[i].inputOne;
            let inputTwo = array[i].inputTwo;
            let result = inputOne / inputTwo;
            console.log('numberCruncher result is ', result);
            return result;
        }
    }
}

// let calculationBundle = 0;

// function gatherInputs(){
//     if($(this).val() === '+') {
//         calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val();
//     }
//     if($(this).val() === '-') {
//         calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val();
//     }
//     if($(this).val() === '*') {
//         calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val();
//     }
//     if($(this).val() === '/') {
//         calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val();
//     }
//     console.log(calculateBundle);
//     return calculationBundle;
// }

// maybe write a GET request after the POST, in function get numbers

// function gatherInputs() {
//     let calculationBundle = 0;
//     if($(this).val() === '+') {
//         calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val();
//     }
//     if($(this).val() === '-') {
//         calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val();
//     }
//     if($(this).val() === '*') {
//         calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val();
//     }
//     if($(this).val() === '/') {
//         calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val();
//     }
//     return calculationBundle;
// }


// function gatherInputs(){
    // if($('#firstNumber').val().length == 0 || $('#secondNumber').val().length == 0) {
    //     console.log('Inputs are empty');
    //     alert('Please enter both numbers into input boxes.')
    //     return;
//     // }
//     if($(this).val() === '+') {
//         // calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val() + ' = ';
//         operator = '+';
//         // console.log('add', calculationBundle);
//     }
//     if($(this).val() === '-') {
//         // calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val() + ' = ';
//         operator = '-';
//         // console.log('subtract', calculationBundle);
//     }
//     if($(this).val() === '*') {
//         // calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val() + ' = ';
//         operator = '*';
//         // console.log('times by', calculationBundle);
//     }
//     if($(this).val() === '/') {
//         // calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val() + ' = ';
//         operator = '/';
//         // console.log('divide by', calculationBundle);
//     };
//     return operator;
// }