

// // 日曆js
// var month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// var month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// var month_name = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
// var holder = document.getElementById("days");
// var prev = document.getElementById("prev");
// var next = document.getElementById("next");
// var ctitle = document.getElementById("calendar-title");
// var cyear = document.getElementById("calendar-year");
// var my_date = new Date();
// var my_year = my_date.getFullYear();
// var my_month = my_date.getMonth();
// var my_day = my_date.getDate();
// //取得某年某月第一天是星期幾
// function dayStart(month, year) {
//     var tmpDate = new Date(year, month, 1);
//     return (tmpDate.getDay());
// }
// //計算某年是不是閏年，年份除以4的餘數
// function daysMonth(month, year) {
//     var tmp = year % 4;
//     if (tmp == 0) {
//         return (month_olympic[month]);
//     } else {
//         return (month_normal[month]);
//     }
// }
// function refreshDate() {
//     var str = "";
//     //取得月份總天數
//     var totalDay = daysMonth(my_month, my_year);
//     //取得月第一天是星期幾
//     var firstDay = dayStart(my_month, my_year);
//     var myclass;
//     for (var i = 1; i < firstDay; i++) {
//         //在起始日之前的日期建立空格
//         str += "<td></td>";
//     }
//     for (var i = 1; i <= totalDay; i++) {
//         if ((i < my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) || my_year < my_date.getFullYear() || (my_year == my_date.getFullYear() && my_month < my_date.getMonth())) {
//             //日期在今天之前，以淺灰色自體顯示
//             myclass = " class='lightgrey'";
//         } else if (i == my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) {
//             //當天日期以綠色背景顯示
//             myclass = " class='green greenbox'";
//         } else {
//             //日期在今天之後，以深灰字體顯示
//             myclass = " class='darkgrey'";
//         }
//         //建立日期結點
//         str += "<td" + myclass + ">" + i + "</td>";
//     }
//     //設置日期顯示
//     holder.innerHTML = str;
//     //設置月份顯示
//     ctitle.innerHTML = month_name[my_month];
//     //設置年份顯示
//     cyear.innerHTML = my_year;
// }
// //執行
// refreshDate();
// prev.onclick = function (e) {
//     e.preventDefault();
//     my_month--;
//     if (my_month < 0) {
//         my_year--;
//         my_month = 11;
//     }
//     refreshDate();
// }
// next.onclick = function (e) {
//     e.preventDefault();
//     my_month++;
//     if (my_month > 11) {
//         my_year++;
//         my_month = 0;
//     }
//     refreshDate();
// }

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