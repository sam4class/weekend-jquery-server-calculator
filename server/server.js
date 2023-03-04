const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

let answer = 0;
let sign = '';

let twoNumbers = [{
    inputNum1: '',
    inputNum2: '',
    answer: '',  //this might not be needed
}];

app.get('/numbers', function(req, res){
    console.log('Request was made');
    res.send(twoNumbers);
})

app.post('/numberGrab', (req,res) => {
    console.log('post a post', req.body);

    //incoming value of two numbers
    let newInputNum1 = Number(req.body.inputNum1);
    let newInputNum2 = Number(req.body.inputNum2);
    //let newAnswer = req.body.answer
    //let newSign = req.body.sign

    console.log(newInputNum1, newInputNum2);

    let newTwoNumbers = {
        inputNum1: newInputNum1,
        inputNum2: newInputNum2,
        //answer: newAnswer,
        //sign: newSign
    }

    //do calculations?
    //     if($('#add').on('click')) {
//         answer = addAnswer;
//         sign = '+';
//         console.log('after click', answer, sign);
        
//     }

//     if($('#minus').on('click')){
//         answer = minusAnswer;
//         sign = '-';
//         console.log('after click',answer);
       
//     }

//     if($('#multiply').on('click')){
//         answer = multiplyAnswer;
//         sign = '*';
//         console.log('after click',answer);
       
//     }

//     if($('#divide').on('click')){
//         answer = divideAnswer;
//         sign = '/';
//         console.log('after click',answer);
// }
    console.log(newTwoNumbers);

twoNumbers.push(newTwoNumbers);

res.sendStatus(201);
});



app.listen(PORT, () => {
    console.log('Server is running', PORT);
})