$(document).ready(onReady);

let sign = '';
let answer;

function onReady(){
    console.log('Inside onReady()');

    $('#equals').on('click', addIncomingInfo);
    $('#clear').on('click', clearThat);

    //to ge the sign
    $('#add').on('click', toAdd);
    $('#minus').on('click', toMinus);
    $('#multiply').on('click', toMulti);
    $('#divide').on('click', toDivide);

    getCalculations();
}
function clearThat(){
    console.log('Inside clearThat'); 
    num1 = $('#number1').val('');
    num2 = $('#number2').val('');
}

function addIncomingInfo(){
    console.log('inside addIncomingInfo()')

    let num1 = $('#number1').val();
    let num2 = $('#number2').val();
    let history = [$('#number1').val()];
    let history2 = [$('#number2').val()];

    let newInfoList = {
        num1: num1,
        num2: num2,
        history: history,
        history2: history2,
        sign: sign,
        answer: answer,
    }

    console.log('data we need', newInfoList);

    $.ajax({
        method: 'POST',
        url: '/addInfo',
        data: newInfoList
    }).then ((response) => {
        console.log('in POST response', response);
       
        getCalculations();
    })
}

function getCalculations(){
    console.log('Inside getCalculations()');

    $.ajax({
        method: 'GET',
        url:'/calculations'
    }).then((response) => {
        console.log('Info for getCalculations', response);
        
        let currnetAnswer = response[response.length - 1].answer;
        console.log('answer', currnetAnswer);
        $('#answer').text(currnetAnswer);

        $('#pastAnswerList').empty();

        for(let i = 0; i<response.length; i++){
            $("#pastAnswerList").append(`
                <ul>
                    <li>${response[i].num1}${response[i].sign}${response[i].num2}=${response[i].answer}</li>
                </ul>
            `)
        }
     })
}

function toAdd(){
    sign = '+';
    console.log(sign);
}

function toMinus(){
    sign = '-';
   console.log(sign);
}

function toMulti(){
    sign = '*';
    console.log(sign);
}
function toDivide(){
    sign = '/';
    console.log(sign);
}