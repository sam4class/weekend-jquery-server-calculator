const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

let answer = 0;
let sign = '';

let twoNumbers = { //#1
    inputNum1: '',
    inputNum2: '',
    sign: '', 
    answer: '',
    history: [] //will hold history
};



app.get('/numbers', function(req, res){ //#2
    console.log('Request was made');
    res.send(twoNumbers);
})

app.post('/numberGrab', (req,res) => {  //#6
    console.log('post a post', req.body);

    //incoming value of two numbers
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    // let newSign = req.body.sign;
    // let newAnswer = req.body.answer;    


    // console.log(num1, num2, newSign, newAnswer);

    // let newTwoNumbers = {
    //     inputNum1: newInputNum1,
    //     inputNum2: newInputNum2,
    //     sign: newSign,
    //     answer: newAnswer,
    //     history: [],
    
    // }

    // twoNumbers.push(newTwoNumbers);

    //store the numbers
    twoNumbers.history.push(req.body.num1);
    twoNumbers.history.push(req.body.num2);

//    // do calculations?
if(sign === '+'){
    answer = num1 + num2;
    console.log('add answer', answer);
    twoNumbers.answer = answer;
   
}

if(sign === '-'){
    answer = num1 - num2;
    console.log('add answer', answer);
    twoNumbers.answer = answer;
    
}

if(sign === '*'){
    answer = num1 * num2;
    console.log('add answer', answer);
    twoNumbers.answer = answer;
   
}
if(sign === '/'){
    answer = num1 / num2;
    console.log('add answer', answer);
    twoNumbers.answer = answer;
}
twoNumbers.history.push(req.body.answer);

    //store the numbers
twoNumbers.history.push(req.body.num1);
twoNumbers.history.push(req.body.num2);

res.sendStatus(201);
});



app.listen(PORT, () => {
    console.log('Server is running', PORT);
})