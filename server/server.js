const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));  //#1 don't forget the port listen

let infoList = [
    {number1: '', sign: '', number2: '', answer: '', history: []}
];

app.get('/infoNeeded', (req,res) => {
    console.log('request made');
    res.send(infoList);
})

app.post('/allInfo', (req,res) => {
    console.log('post a post', req.body);



    res.sendStatus(201); //res.send(infoList); 
})

app.listen(PORT, () => {
    console.log('Server is running', PORT);
});

