const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));  //#1 don't forget the port listen

let answer = 0;
let sign = '';

let infoList = [{number1: '', sign: "", number2: '', answer: '', history: []}];

app.get('/infoNeeded', (req,res) => {
    console.log('request made');
    res.send(infoList);
})

app.post('/infoNeeded', (req,res) => {
    console.log('post a post', req.body);

    //accessing the info in post client side
    //data will  be put on req.body
    //exact same object as the client side

//check how to calculate

let num1 = Number(req.body.num1);
let num2 = Number(req.body.num2);
let sign = req.body.sign;
let answer = req.body.answer;

let allInfo = [{
    number1: num1,
    number2: num2,
    sign: sign,
    answer: answer
}];

if(sign === '+'){
    answer = num1 + num2;
    console.log('add answer', answer);
    console.log('sign', sign);
}

if(sign === '-'){
    answer = num1 - num2;
    console.log('add answer', answer); 
    console.log('sign', sign);
}

if(sign === '*'){
    answer = num1 * num2;
    console.log('add answer', answer);
    console.log('sign', sign);
}
if(sign === '/'){
    answer = num1 / num2;
    console.log('add answer', answer);
    console.log('sign', sign);
   
}
infoList.push(allInfo);




//store the numbers
// infoList.history.push(req.body.num1);
// infoList.history.push(req.body.num2);
// console.log(infoList);






    res.sendStatus(201); //res.send(infoList); 
})

app.listen(PORT, () => {
    console.log('Server is running', PORT);
});

