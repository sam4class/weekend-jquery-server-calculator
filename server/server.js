const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public')); 

let infoList = [];

app.get('/calculations', (req,res) => {
    console.log('get a get');
    res.send(infoList);
})

function calculate(num1, num2, sign){
    if(sign === '+'){
        return num1 + num2;
    }else if(sign === '-'){
        return num1 - num2;
    }else if(sign === '*'){
        return num1 * num2;
    }else if(sign === '/'){
        return num1 / num2;
    }
}

app.post('/addInfo', (req, res) => {
    console.log('post a post', req.body);

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let sign = req.body.sign;
    let answer = calculate(num1, num2, sign);

    let newInfoList = {
        num1: num1,
        num2: num2,
        sign: sign,
        answer: answer
    }

    infoList.push(newInfoList);
    console.log('this is the new list', newInfoList);

    res.sendStatus(201)

})



app.listen(PORT, () => {
    console.log('Server is running', PORT);
});

