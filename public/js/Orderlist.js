$('#checklist').click(function(){
    if ($('#orderlist').css('display') === 'none') {
        $('#orderlist').css('display', 'table');
    } else {
        $('#orderlist').css('display', 'none');
    }
})