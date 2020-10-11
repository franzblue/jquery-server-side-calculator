console.log('hello from js');

$(document).ready(onReady);

// let calculationBundle = 0;

function onReady() {
    getData();
    console.log('Hello from jQuery');
    $('.operator').on('click', gatherInputs);
    $('#clear').on('click', clearInputs);
    $('#submit').on('click', sendData);
    // $('.operator').on('click', clickedButton);
    // $('.operator').on('click', bundle);  // I can merge my functions
                                            // I am unclear where to place these click listeners
}

let operator = 0;

function gatherInputs(){
    if($('#firstNumber').val().length == 0 || $('#secondNumber').val().length == 0) {
        console.log('Inputs are empty');
        alert('Please enter both numbers into input boxes.')
    }
    if($(this).val() === '+') {
        calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val() + ' = ';
        operator = '+';
        console.log('add', calculationBundle);
    }
    if($(this).val() === '-') {
        calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val() + ' = ';
        operator = '-';
        console.log('subtract', calculationBundle);
    }
    if($(this).val() === '*') {
        calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val() + ' = ';
        operator = '*';
        console.log('times by', calculationBundle);
    }
    if($(this).val() === '/') {
        calculationBundle = $('#firstNumber').val() + ' ' + $(this).val() + ' ' + $('#secondNumber').val() + ' = ';
        operator = '/';
        console.log('divide by', calculationBundle);
    };
    return operator;
}

function sendData(){
    console.log('in POST sendData');
    $.ajax( {
        method: 'POST',
        url: '/numberMunchers',
        data: {
            inputOne: $('#firstNumber').val(),
            inputTwo: $('#secondNumber').val(),        
            selectedOperator: operator,
            bundle: calculationBundle,
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

function appendDOM(array){
    $('#calcHistory').empty();
    for(i = 0; i < array.length; i++) {
        $('#calcHistory').append(`<li>` + array[i].bundle + `</li>`);
    }
}

function clearInputs(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('.operator').removeAttr('disabled');
}





    // clearInputs();


// // function to calculate inputs
// // incorporates whichever math operation was selected in the server
// function gatherInputs(){
//     console.log('in crunchNumbers');
//     let answer = {
//         firstNumber: $('#firstNumber').val(),
//         operator: $(this).val(), // this is almost what I need
//         secondNumber: $('#secondNumber').val(),
//     }
//     console.log('Inputs as an object, being POSTed to server ', answer);
    // $.ajax( {
    //     method: 'POST',
    //     url: '/numberMunchers',
    //     data: answer,
    // }).then(function(response) {
    //     console.log('response', response);
    // }).catch(function(error) {
    //     alert(error);
//     });
//     clearInputs;
//     // // to enable operator buttons again
//     // $('.operator').removeAttr('disabled');
//     // // clears input fields
//     // $('#firstNumber').val('');  // maybe I don't want to clear these out ???
//     // $('#secondNumber').val(''); // maybe I don't want to clear these out ???
//     return answer;
// }

// // this will send the selected operation to the server
// function operatorButton(){
//     console.log('in operatorButton');
//     console.log($(this).val());
//     // to disable button until inputs submitted
//     $('.operator').attr('disabled','disabled');
//     let operatorValue = $(this).val();
//     // send data to server via POST request
//     $.ajax( {
//         method: 'POST',
//         url: '/operator',
//         data: {
//             operatorValue,
//         }
//     }).then(function(response) {
//         console.log('response', response);
//     }).catch(function(error) {
//         // notify the user of an error in POST request
//         alert(error);
//     });
// }





// maybe write a GET request after the POST, in function get numbers


// to disable buttons
// to disable
// document.getElementById("btnPlaceOrder").disabled = true; 

// to enable
// document.getElementById("btnPlaceOrder").disabled = false; 

// function operatorSelction(){
//     if($(this).id === 'addition')
// }









// function graveyard!!!!!




// $.ajax( {
//     method: 'POST',
//     url: '/numberMunchers',
//     data: {
//         inputOne: $('#firstNumber').val(),
//         inputTwo: $('#secondNumber').val(),
//         operator: '+',
//         calculationBundle: calculationBundle
//     }
// }).then(function(response) {
//     console.log('response', response);
// }).catch(function(error) {
//     alert(error);
// });

// $.ajax( {
//     method: 'POST',
//     url: '/numberMunchers',
//     data: {
//         inputOne: $('#firstNumber').val(),
//         inputTwo: $('#secondNumber').val(),
//         operator: '-',
//         calculationBundle: calculationBundle
//     }
// }).then(function(response) {
//     console.log('response', response);
// }).catch(function(error) {
//     alert(error);
// });

// $.ajax( {
//     method: 'POST',
//     url: '/numberMunchers',
//     data: {
//         inputOne: $('#firstNumber').val(),
//         inputTwo: $('#secondNumber').val(),
//         operator: '*',
//         calculationBundle: calculationBundle
//     }
// }).then(function(response) {
//     console.log('response', response);
// }).catch(function(error) {
//     alert(error);
// });

// $.ajax( {
//     method: 'POST',
//     url: '/numberMunchers',
//     data: {
//         inputOne: $('#firstNumber').val(),
//         inputTwo: $('#secondNumber').val(),
//         operator: '/',
//         calculationBundle: calculationBundle
//     }
// }).then(function(response) {
//     console.log('response', response);
// }).catch(function(error) {
//     alert(error);
// });