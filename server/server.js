const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

let twoNumbers = {
    inputNum1: '',
    inputNum2: '',
    answer: '',  //this might not be needed
    history: []
};

app.get('/numbers', function(req, res){
    console.log('Request was made');
    res.send(twoNumbers);
})

app.post('/numberGrab', (req,res) => {
    console.log('post a post', req.body);

    //do the calculation
    let inputNum1 = Number(req.body.inputNum1);
    let inputNum2 = Number(req.body.inputNum2);

})