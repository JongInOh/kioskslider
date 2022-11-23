$('.slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	Arrow: true,
	speed: 100,
	prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
	// nextArrow : "<button type='button' class='slick-next'><i class="fa-solid fa-circle-chevron-right"></i></button>",
});

$('.button').on('click', function () {
	let $this = $(this);
	let index = $this.index();

	$this.addClass('active');
	$this.siblings('button.active').removeClass('active');

	let $outer = $this.closest('.outer');
	let $current = $outer.find(' > .tabs > .tab.active');
	let $post = $outer.find(' > .tabs > .tab').eq(index);

	$current.removeClass('active');
	$post.addClass('active');

	$('.slider').slick('setPosition');
});

// conform 주문 yes or no

$('.item').on('click', function () {
	$('section').animate({ opacity: '0.7' }, 0);
	$('#pop').show();
});

$('.close').on('click', function () {
	$('section').animate({ opacity: '1' }, 0);
	$('#pop').hide();
});

// {
// 	$(function () {
// 		$.ajax({
// 			url: 'js/item.json',
// 			dataType: 'json',
// 			success: function (data) {
// 				if (data.length > 0) {
// 					var a = $('');
// 					for (var i in data) {
// 						var $img = data[i].img;
// 						var $name = data[i].name;
// 						// var $last_name = data[i].last_name;
// 						// var $email = data[i].email;
// 						var $price = data[i].price;

// 						var b = $('<tr/>').append(
// 							$('<td/>').text($img),
// 							$('<td/>').text($name),
// 							// $("<td/>").text($last_name),
// 							// $("<td/>").text($email),
// 							$('<td/>').text($price)
// 						);

// 						a.append(b);
// 					}
// 					$('.close').append(a);
// 				}
// 			},
// 		});
// 	});
// }
