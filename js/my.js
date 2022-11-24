// $('#btn_buy').click(function () {
// 	alert('결제기능은 구현중입니다.');
// });

$(function () {
	init();

	function init() {
		const foodimg = document.querySelector('.foodimg');
		const menu = document.querySelector('.menu');

		$.ajax({
			url: '.json/item.json',
			dataType: 'json',
			success: function (data) {
				foodimg.forEach((img, idx) => {
					if (img.attributes[0].value == data[idx].index) {
						$('.foodimg > img').eq(idx).attr('src', data[idx].img);
						$('.menu > p').eq(idx).text(data[idx].name);
						$('.menu > p > p').eq(idx).text(data[idx].price);
						console.log(menu);
					}
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
