const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log("Up and running on port: ", port);
});

// still need to store this value and use it later
app.post('/operator', (req, res) => {
    console.log('hello from POST', req.body);
    operatorValues.push(req.body);
    res.sendStatus(200);
});

app.post('/numberMunchers', (req, res) => {
    console.log('hello from POST', req.body);
    calculateThis.push(req.body);
    res.sendStatus(200);
});

calculateThis = [];
operatorValues = [];

// function numberMuncher(inputValues, operatorValues, counter){
//     console.log('numberMuncher', answer[counter].firstNumber, operatorValues[counter], inputValues[counter].secondNumber);
// }

// console.log(numberMuncher(inputValues, operatorValues, counter));

// function numberMuncherVersionTwo(inputValues, operatorValues, counter){
//     if(operatorValues[counter] === '='){
//         let result = inputValues[counter].firstNumber + inputValues[counter].secondNumber;
//         return result;
//     }
//     else if(operatorValues[counter] === '-'){
//         let result = inputValues[counter].firstNumber - inputValues[counter].secondNumber;
//         return result;
//     }
//     else if(operatorValues[counter] === '*'){
//         let result = inputValues[counter].firstNumber * inputValues[counter].secondNumber;
//         return result;
//     }
//     else if(operatorValues === '/'){
//         let result = inputValues[counter].firstNumber / inputValues[counter].secondNumber;
//         return result;
//     }
//     else {
//         alert('Please enter correct inputs')
//     }
// }


// something weird brewing down below

// app.post('/addition', (req, res) => {
//     console.log('hello from +POST+', req.body);
//     addition.push(req.body);
//     res.sendStatus(200);
// });

// app.post('/subtraction', (req, res) => {
//     console.log('hello from -POST-', req.body);
//     addition.push(req.body);
//     res.sendStatus(200);
// });

// app.post('/multiplication', (req, res) => {
//     console.log('hello from *POST*', req.body);
//     addition.push(req.body);
//     res.sendStatus(200);
// });

// app.post('/division', (req, res) => {
//     console.log('hello from /POST/', req.body);
//     addition.push(req.body);
//     res.sendStatus(200);
// });