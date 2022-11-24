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

// foodimg.forEach((img, idx) => {
// 	img.addEventListener('click', () => {
// 		// console.log('img', img);
// 		// console.log('img.target', img.attributes[1].value);
// 		// console.log('idx', idx);
// 		$.ajax({
// 			url: 'json-server-exam/db.json',
// 			dataType: 'json',
// 			success: function (data) {
// 				// console.log(data[idx].index);
// 				if (data[idx].index == idx) {
// 					$('.chooseFood__popUp__img > img').attr('src', data[idx].img);
// 					$('.chooseFood__popUp__img > img').attr('alt', data[idx].alt);
// 					$('.chooseFood__popUp__wrap > h1').text(data[idx].name);
// 					$('.popUp__spin__wrap > span').text(data[idx].price);
// 					$('.popUp__spin__wrap > button').attr('value', data[idx].value);
// 				}
// 			},
// 		});
// 		if (img.attributes[1].value == idx) {
// 			popUp.classList.add('pop');
// 			foodSection.classList.add('noClick');
// 			$('body').css('overflow', 'hidden');
// 			header.style.opacity = '0.5';
// 			foodSection.style.opacity = '0.5';
// 		}
// 	});
// });

// function closeEvt(icon) {
// 	icon.addEventListener('click', () => {
// 		popUp.classList.remove('pop');
// 		foodSection.classList.remove('noClick');
// 		$('body').css('overflow', 'visible');
// 		header.style.opacity = '1';
// 		foodSection.style.opacity = '1';
// 	});
// }

// closeEvt(xMark);
// closeEvt(cartIcon);

// // xMark.addEventListener('click', () => {
// //    popUp.classList.remove('pop');
// //    header.style.opacity = '1';
// //    foodSection.style.opacity = '1';
// // });

// // json
// // let data = JSON.parse(JSON.stringify(TestFile));
// // console.log(data);

// let sum = 0;
// const spin = document.querySelectorAll('.spin');
// const button = document.querySelectorAll('.cartIcon');
// const sumText = document.querySelector('#sumtext');

// // button.addEventListener('click', function () {
// //    sum += parseInt(button.value) * parseInt(spin.value);
// //    document.getElementById('sumtext').value = sum + '원';
// //    spin.value = 1;
// // });

// button.forEach((cart, idx) => {
// 	cart.addEventListener('click', function () {
// 		// sum +=
// 		//    parseInt(this.value) * parseInt(this.parentElement.childNodes[3].value);
// 		sum += parseInt(button[idx].value) * parseInt(spin[idx].value);
// 		sumText.value = sum + '원';
// 		// console.log('button.value', button[idx].value);
// 		// console.log('spin.value', spin[idx].value);
// 		spin[idx].value = 1;
// 		// console.log('sum', sum);
// 		// console.log('cart', cart);
// 		// console.log('idx', idx);
// 	});
// });

// // for문으로 변경하기
// function ifelse() {
// 	let fee = prompt('금액을 투입하세요.', 10000);
// 	console.log('type', typeof fee);
// 	if (fee != NaN || fee != null || typeof fee != 'string') {
// 		if (fee < sum) {
// 			console.log('outsidefor', fee);
// 			for (let i = 1; ; i++) {
// 				console.log('insidefor', fee);
// 				if (isNaN(fee)) {
// 					alert('숫자로 입력하세요.');
// 					fee = prompt('다시 금액을 투입하세요.', 10000);
// 				} else if (fee == null) {
// 					return;
// 				} else if (fee > sum) {
// 					alert(
// 						'결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.'
// 					);
// 					sum = 0;
// 					sumText.value = sum + '원';
// 					return;
// 				} else {
// 					console.log('insideforNelse', fee);
// 					console.log('feetype', typeof fee);
// 					alert(
// 						Math.abs(fee - sum) + '원 부족합니다.\n다시 금액을 투입하세요.'
// 					);
// 					fee = prompt('다시 금액을 투입하세요.', 10000);
// 				}
// 			}
// 		} else if (isNaN(fee)) {
// 			for (let i = 1; ; i++) {
// 				console.log('insidefor', fee);
// 				if (isNaN(fee)) {
// 					alert('숫자로 입력하세요.');
// 					fee = prompt('다시 금액을 투입하세요.', 10000);
// 				} else if (fee == null) {
// 					return;
// 				} else if (fee > sum) {
// 					alert(
// 						'결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.'
// 					);
// 					sum = 0;
// 					sumText.value = sum + '원';
// 					return;
// 				} else {
// 					console.log('insideforNelse', fee);
// 					console.log('feetype', typeof fee);
// 					alert(
// 						Math.abs(fee - sum) + '원 부족합니다.\n다시 금액을 투입하세요.'
// 					);
// 					fee = prompt('다시 금액을 투입하세요.', 10000);
// 				}
// 			}
// 		} else if (fee == null) {
// 			return;
// 		} else {
// 			alert('결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.');
// 			sum = 0;
// 			sumText.value = sum + '원';
// 		}
// 	} else if (fee == null) {
// 		return;
// 	} else if (isNaN(fee)) {
// 		for (let i = 1; ; i++) {
// 			console.log('insidefor', fee);
// 			if (isNaN(fee)) {
// 				alert('숫자로 입력하세요.');
// 				fee = prompt('다시 금액을 투입하세요.', 10000);
// 			} else if (fee == null) {
// 				return;
// 			} else if (fee > sum) {
// 				alert('결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.');
// 				sum = 0;
// 				sumText.value = sum + '원';
// 			} else {
// 				console.log('insideforNelse', fee);
// 				console.log('feetype', typeof fee);
// 				alert(Math.abs(fee - sum) + '원 부족합니다.\n다시 금액을 투입하세요.');
// 				fee = prompt('다시 금액을 투입하세요.', 10000);
// 			}
// 		}
// 	} else {
// 		alert('결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.');
// 		sum = 0;
// 		sumText.value = sum + '원';
// 	}
// }

// const charge = document.querySelector('.charge');
// charge.addEventListener('click', () => {
// 	if (sum == 0) {
// 		alert('선택한 메뉴가 없습니다.\n메뉴를 선택하세요.');
// 	} else {
// 		ifelse();
// 	}
// });

// const reject = document.querySelector('.reject');
// reject.addEventListener('click', () => {
// 	if (sum == 0) {
// 		alert('선택한 메뉴가 없습니다.\n메뉴를 선택하세요.');
// 	} else {
// 		if (confirm('정말 취소하겠습니까?')) {
// 			alert('취소되었습니다.');
// 			// console.log('typeof', typeof sum);
// 			sum = 0;
// 			sumText.value = sum + '원';
// 		}
// 	}
// });
