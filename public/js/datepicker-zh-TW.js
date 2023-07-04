/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Ressol (ressol@gmail.com). */
jQuery(function ($) {
	$.datepicker.regional['zh-TW'] = {
		closeText: '關閉',
		prevText: '&#x3c;上月',
		nextText: '下月&#x3e;',
		currentText: '今天',
		monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
			'七月', '八月', '九月', '十月', '十一月', '十二月'],
		monthNamesShort: ['一', '二', '三', '四', '五', '六',
			'七', '八', '九', '十', '十一', '十二'],
		dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
		weekHeader: '周',
		dateFormat: 'yy/mm/dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '年'
	};
	$.datepicker.setDefaults($.datepicker.regional['zh-TW']);
});

// jquery日曆
$(function () {
	$('#datepicker_div').datepicker({
		regional: 'zh-TW',
		changeMonth: true,
		changeYear: true,
		// 格式化輸出
		dateFormat: 'yy-m-d',
		showButtonPanel: true,
		minDate: 0, maxDate: "+2M ",
		// 設定除了星期一以外都能點選
		beforeShowDay:
			(date) => {
				// console.log(date);  
				return [date.getDay() === 2 || date.getDay() === 5, ""]
			},

		// 一星期只有星期二和五可以點選，點選星期二會選取星期三和星期四；點選星期五會選取星期六和星期日
		onSelect: function (dateText) {
			var selectedDate = new Date(dateText); // 選擇的日期
			var nextDay = new Date(selectedDate);
			nextDay.setDate(selectedDate.getDate() + 1); // 選擇日期的下一天
			var nextTwoDays = new Date(selectedDate);
			nextTwoDays.setDate(selectedDate.getDate() + 2); // 選擇日期的後兩天

			var theDay = $.datepicker.formatDate('yy-mm-dd', selectedDate);
			var nextDay = $.datepicker.formatDate('yy-mm-dd', nextDay);
			var nextTwoDays = $.datepicker.formatDate('yy-mm-dd', nextTwoDays);

			var clickDate = "選擇的日期：" + theDay + ", " + nextDay + ", " + nextTwoDays;

			$("#bee").text(clickDate);
		}
	})
})