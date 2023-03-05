$(document).ready(onReady);

function onReady(){
    console.log('This times the charm.');

    $("#equals").on('click', addAllThatInfo);

    getThatInfo();
}

function addAllThatInfo(){
    //get values from inputs
    let info = {
        num1: $("#number1").val(),
        num2: $("#number2").val()
    }
    console.log(info);
    //ajax to server

    $.ajax({
        method: 'POST',
        url: '/allInfo',
        data: info, //object
    }).then((response) =>{
        console.log('post finished');
    })
    //deal with response
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
    })
}