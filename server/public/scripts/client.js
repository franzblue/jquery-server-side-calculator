console.log('hello from js');

$(document).ready(onReady);

function onReady() {
    console.log('Hello from jQuery');
    $('#equals').on('click', crunchNumbers);
    $('.operations').on('click', operationsSelector);
}

// function to calculate inputs
// incorporates whichever math operation was selected in the server
function crunchNumbers(){
    console.log('in crunchNumbers');
    let answer = {
        firstNumber: $('#firstNumber').val(),
        operations: $(this).val(),
        secondNumber: $('#secondNumber').val(),
    }
    console.log('Inputs as an object', answer);
    //clears input fields
    $('#firstNumber').val('');
    $('#secondNumber').val('');
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