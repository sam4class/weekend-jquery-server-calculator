

$(document).ready(onReady);

let answer = 0;
let sign = '';

function onReady(){
    console.log('This times the charm.');

    $("#equals").on('click', addAllThatInfo);

    //find out sign
   $('#add').on('click', toAdd);
   $('#minus').on('click', toMinus);
   $('#multiply').on('click', toMulti);
   $('#divide').on('click', toDivide);

    getThatInfo();
}

let newNum1 = $("#number1").val();
let newNum2 = $("#number2").val();

console.log ('these are num1 and num2', newNum1, newNum2);

function addAllThatInfo(){
    //get values from inputs
    // let num1 = $("#number1").val();
    // let num2 = $("#number2").val();
    // console.log ('these are num1 and num2', num1, num2);

    let info = {
        num1:$("#number1").val(),
        num2: $("#number2").val(),
        sign: sign,
        answer: answer
    }
    console.log(info);
    //ajax to server

    $.ajax({
        method: 'POST',
        url: '/infoNeeded',
        data: info, //object
    }).then((response) =>{
        console.log('post finished');
        //update with your GET
        getThatInfo();
       
    })
    //deal with response
   // render();
}

function getThatInfo(){ //get this in onReady
    console.log('Inside getThatInfo');

    $.ajax({
        method: 'GET',
        url: '/infoNeeded'
    }).then((response) => {
        console.log('results from get', response);
        //will update with render?

    }).catch(function(){
        alert('failed at getThatInfo');
    });
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

