

$(document).ready(onReady);

let sign = '';
let answer = '';

function onReady(){
    console.log('This times the charm.');
    $('#equals').on('click', addIncomingInfo)

        //find out sign
        $('#add').on('click', toAdd);
        $('#minus').on('click', toMinus);
        $('#multiply').on('click', toMulti);
        $('#divide').on('click', toDivide);

    getCalculations();

}

function addIncomingInfo(){

    let newInfoList = {
        num1: $('#number1').val(),
        history1: [$('#number1').val()],
        num2: $('#number2').val(),
        history2: [$('#number2').val()],
        sign: sign,
        answer: answer,
    }
    console.log('data we need', newInfoList);

    $.ajax({
        method: 'POST',
        url: '/addInfo',
        data: newInfoList,
    }).then((response) => {
        console.log('this is POST response:', response);
        num1 = $('#number1').val(''),
        num2 = $('#number2').val(''),
        getCalculations();
    })
}

function getCalculations(){
    console.log('inside getInfo')

    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then((response) => {
        console.log('Info from getCalculations:', response);
        //append here for getting the calculations
        $('#addedData').empty();

        for(let info of response){
            $('#addedData').append(`
            <div id="pastAnswerList">
            <ul>
                <li>${info.num1}${info.sign}${info.num2}=${info.answer}</li>
            </ul>
        </div>
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





