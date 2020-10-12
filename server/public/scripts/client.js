$(document).ready(onReady);

function onReady() {
    getData();
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
    for(let i = 0; i< dataToAppend.length; i++) {
        $('#calcHistory').append(`
            <li>helloworld</li>
        `);
    }
}

function clearInputs(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}