

$(document).ready(onReady);

let answer = 0;
let sign = '';


function onReady(){
    console.log('Time to do this');
    getTwoNumbers();   //#4

    $('#equals').on('click', grabNumber); //#5
 
    //find out sign
    $('#add').on('click', toAdd);
    $('#minus').on('click', toMinus);
    $('#multiply').on('click', toMulti);
    $('#divide').on('click', toDivide);

     
}

function grabNumber(){  //#5.5
    //what this is doing:
    //get values from input
    //ajax to server
    //deal with response

    //get vaules by making an object
    let nowNumbers ={
        num1: Number($('#number1').val()),
        num2: Number($('#number2').val()),
        
    }
    
   console.log(nowNumbers);
    //ajax to server
    $.ajax({
        method: 'POST',
        url: '/numberGrab',
        data:{
          nowNumbers, //must be an objest, the one you just made in this post
         }
    }).then((repsonse) => {
        console.log('Post posted!')
        num1 = Number($('#number1').val(''));
        num2 = Number($('#number2').val(''))
        //update our data
        getTwoNumbers();
        render(); 
    });
    //deal with response
 
       
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
    


 
function getTwoNumbers(){ //#3

    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then ((response) => {
        console.log('Inside getTwoNumbers', response);
        
    }).catch(function(){
        alert('failed at grabTwoNumbers');
    })

}

 


function render(response){
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
