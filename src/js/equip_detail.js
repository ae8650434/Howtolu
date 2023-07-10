// 數量按鈕js
$(function () {
    // 按按鈕增加數值
    $('.qtyplus').click(function (e) {
        // 阻止按鈕默認行為
        e.preventDefault();
        // 取得欄位名稱
        fieldName = $(this).attr('field');
        // 取得目前的數值
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // 如果不是未定義的
        if (!isNaN(currentVal)) {
            // 增加
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // 否則設為0
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // 此按鈕將數值遞減為0
    $(".qtyminus").click(function (e) {
        // 阻止按鈕的默認行為
        e.preventDefault();
        // 取得欄位名稱
        fieldName = $(this).attr('field');
        // 取得目前的值
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // 如果它不是未定義的或者大於0
        if (!isNaN(currentVal) && currentVal > 0) {
            // 減少1
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // 否則將其設為0
            $('input[name=' + fieldName + ']').val(0);
        }
    });
});

// 
function insc() {
    var count = document.getElementById("count").innerHTML;
    document.getElementById("count").innerHTML = parseInt(count) + 1;
}
function dec() {
    var count = document.getElementById("count").innerHTML;
    if (parseInt(count) > 0) {
        document.getElementById("count").innerHTML = parseInt(count) - 1;
    };

}