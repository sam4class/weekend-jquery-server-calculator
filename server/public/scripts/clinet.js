$(document).ready(onReady);

function onReady(){
    console.log('Time to do this');

}

function 

function grabTwoNumbers(){
    let twoNumbers = {
        inputNum1: $('#number1').val(),
        inputNum2: $('#number2').val()
    }

    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then (function(response){
        console.log('Inside grabTwoNumbers', response);
    }).catch(function(){
        alert('failed at grabTwoNumbers');
    })
}