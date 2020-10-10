console.log('hello from js');

$(document).ready(onReady);

function onReady() {
    console.log('Hello from jQuery');
    $('#equals').on('click', getNumbers);
    $('.operations').on('click', operationsSelector);
    $('#clear').on('click', clearInputs);
                                            // I am unclear where to place these click listeners
}

function clearInputs(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    console.log('Inputs cleared');
}

// function to calculate inputs
// incorporates whichever math operation was selected in the server
function getNumbers(){
    console.log('in crunchNumbers');
    let answer = {
        firstNumber: $('#firstNumber').val(),
        // operations: $(this).val(), // this is almost what I need
        secondNumber: $('#secondNumber').val(),
    }
    console.log('Inputs as an object', answer);
    $.ajax( {
        method: 'POST',
        url: '/numberMunchers',
        data: answer,
    }).then(function(response) {
        console.log('response', response);
    }).catch(function(error) {
        alert(error);
    });
    //clears input fields
    $('#firstNumber').val('');  // maybe I don't want to clear these out ???
    $('#secondNumber').val(''); // maybe I don't want to clear these out ???
    return answer;
}

// this will send the selected operation to the server
function operationsSelector(){
    console.log('in operationsSelected');
    console.log($(this).val());
    let operations = $(this).val();
    // send data to server via POST request
    $.ajax( {
        method: 'POST',
        url: '/operations',
        data: {
            operations,
        }
    }).then(function(response) {
        console.log('response', response);
    }).catch(function(error) {
        // notify the user of an error in POST request
        alert(error);
    });
}