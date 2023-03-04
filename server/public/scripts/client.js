$(document).ready(onReady);

answer = 0;
sign = '';

function onReady(){
    console.log('Time to do this');

    $('#equals').on('click', grabNumber);

    //find out how to calculate
    // $('#add').on('click', addNumbers);
    // $('#minus').on('click', minusNumbers);
    // $('#multiply').on('click', multiplyNumbers);
    // $('#divide').on('click', divideNumbers);
}

function grabNumber(){
    
    num1 = Number($('#number1').val());
    num2 = Number($('#number2').val());
    
    addAnswer = num1 + num2;
    minusAnswer = num1 - num2;
    multiplyAnswer = num1 * num2;
    divideAnswer = num1 / num2;


   console.log('input1', num1, 'input2', num2);
    $.ajax({
        method: 'POST',
        url: '/numberGrab',
        data:{
           inputNum1: num1,
           inputNum2: num2,
            //answer: 0,
            //sign: '',
        }
    }).then((repsonse) => {
        console.log('Post posted!')
        num1 = Number($('#number1').val(''));
        num2 = Number($('#number2').val(''));
        getTwoNumbers();
    });

    if($('#add').on('click')) {
        answer = addAnswer;
        sign = '+';
        console.log('after click', answer, sign);
       
        
    }

    if($('#minus').on('click')){
        answer = minusAnswer;
        sign = '-';
        console.log('after click',answer);
       
       
    }

    if($('#multiply').on('click')){
        answer = multiplyAnswer;
        sign = '*';
        console.log('after click',answer);
       
       
    }

    if($('#divide').on('click')){
        answer = divideAnswer;
        sign = '/';
        console.log('after click',answer);
        
}
     render();   
    }

function getTwoNumbers(){

    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then (function(response){
        console.log('Inside getTwoNumbers', response);
    }).catch(function(){
        alert('failed at grabTwoNumbers');
    })
}



function render(){
    console.log('Inside render')

    $('calSetUp').empty();
    $('#answer').empty();

    $('#answer').append(`
    <h2 id="answer">${answer}</h2>`);

    $('#addedData').append(`    
    <div id="pastAnswerList">
        <ul>
            <li>${num1}${sign}${num2}=${answer}</li>
        </ul>
    </div>
    
    `)
}
