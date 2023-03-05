const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));  //#1 don't forget the port listen

let infoList = [
    //{ number1: '',
    // history1: [],
    // sign: '',
    // number2: '',
    // history2: [],
//}
];

app.get('/calculations', (req,res) =>{
    console.log('get a get');
    res.send(infoList);
})

app.post('/addInfo', (req,res) => {
    console.log('post a post', req.body);

    //make if statement

let num1 = Number(req.body.num1);
let num2 = Number(req.body.num2);
let sign = req.body.sign;


    if(sign === '+'){
        req.body.answer = num1 + num2;
        console.log('add answer', req.body.answer);
        infoList.push(req.body.answer);
    }
    
    if(sign === '-'){
        req.body.answer = num1 - num2;
        console.log('add answer', req.body.answer); 
        
    }
    
    if(sign === '*'){
        req.body.answer = num1 * num2;
        console.log('add answer', req.body.answer);
        
    }
    if(sign === '/'){
        req.body.answer = num1 / num2;
        console.log('add answer', req.body.answer);
        
    }

    infoList.push(req.body);



    //store the guesses
// let incomNum1 = Number(req.body.num1);
// let incomHistory1 = req.body.num1;
// let incomNum2 = Number(req.body.num2);
// let incomHistory2 = req.body.num2;

//  let incomingInfoList = {
//     num1: incomNum1,
//     numhistory1: [incomHistory1],
//     num2: incomNum2 ,
//     numhistory2: [incomHistory2],
//     sign: req.body.sign,
//     answer: req.body.answer
//  }
// console.log(incomingInfoList);
// infoList.push(incomingInfoList);

res.sendStatus(201);

});

app.listen(PORT, () => {
    console.log('Server is running', PORT);
});

