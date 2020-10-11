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
app.post('/operations', (req, res) => {
    console.log('hello from POST', req.body);
    operations.push(req.body);
    res.sendStatus(200);
});

app.post('/numberMunchers', (req, res) => {
    console.log('hello from POST', req.body);
    answer.push(req.body);
    res.sendStatus(200);
});

answer = [];
operations = [];

// function numberMuncher(answer, operations, counter){
//     console.log('numberMuncher', answer[counter].firstNumber, operations[counter], answer[counter].secondNumber);
// }

// console.log(numberMuncher(answer, operations, counter));

// function numberMuncherVersionTwo(answer, operations, counter){
//     if(operations[counter] === '='){
//         let result = answer[counter].firstNumber + answer[counter].secondNumber;
//         return result;
//     }
//     else if(operations[counter] === '-'){
//         let result = answer[counter].firstNumber - answer[counter].secondNumber;
//         return result;
//     }
//     else if(operations[counter] === '*'){
//         let result = answer[counter].firstNumber * answer[counter].secondNumber;
//         return result;
//     }
//     else if(operations === '/'){
//         let result = answer[counter].firstNumber / answer[counter].secondNumber;
//         return result;
//     }
//     else {
//         alert('Please enter correct inputs')
//     }
// }