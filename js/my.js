// $('#btn_buy').click(function () {
// 	alert('결제기능은 구현중입니다.');
// });

$(function () {
	init();

	function init() {
		const $menu = $('.menu');
		//var idx = 0;

		$.ajax({
			url: 'js/kiosk.json',
			dataType: 'json',
			success: function (data) {
				alert('aaa');
				$.each(data, function (idx) {
					$('.foodimg').eq(idx).attr('src', this['img']);
					$('.menu_name').eq(idx).text(this['name']);
					$('.menu_price').eq(idx).text(this['price']);
				});
			},
		});
	}

	$('.minus').on('click', function () {
		let $result = $(this).next();
		let count = Number($result.text());

		count--;
		if (count < 0) {
			count = 0;
		}
		$result.text(count);
	});

	$('.plus').on('click', function () {
		let $result = $(this).prev();
		let count = Number($result.text());

		count++;
		$result.text(count);
	});
});
