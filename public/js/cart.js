function del(dels) {
    var x = document.getElementById('text' + dels);
    x.innerHTML = '';

    var delDiv = document.getElementById('null');
    if (delDiv.innerText.length === 0) {

        var magnifier = document.getElementById('magnifier');
        magnifier.style.display = 'flex';

        var shopping2Div = document.getElementById('shopping2');
        shopping2Div.style.display = 'none';

        var process = document.getElementById('process');
        process.style.display = 'none';
    }
}

// var process = 0;
// function processBuy(){
//     process++;
//     var process1 = document.getElementById('process1');
//     var process2 = document.getElementById('process2');
//     var process3 = document.getElementById('process3');

//     if(process === 1){
//         process1.style.color = 'grey';
//         process2.style.color = 'orange';
//         process3.style.color = 'grey';
//     } else if(process === 2) {
//         process1.style.color = 'grey';
//         process2.style.color = 'grey';
//         process3.style.color = 'orange';
//     } 
// }