const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log("Up and running on port: ", port);
});


app.post('/operations', (req, res) => {
    console.log('hello from POST', req.body);
    res.sendStatus(200);
});