// var sum = 0;

// function calc(button) {
// 	if (button) sum += parseInt(button.value);
// 	else sum -= button.value;

// 	document.getElementById('sumtext').value = sum;
// }
// $;

// $('#btn_buy').click(function () {
// 	alert('결제기능은 구현중입니다.');
// });

// // let num = 2;

// $(document).click(function{
// 	const resultElement = document.getElementById('result');

// 	let number = resultElement.innerText;

// 	function
// 	if($(document).click(function{
// 		$('#plus').
// 	}))
// })

// let result = document.addEventListener
const resultElement = $('.result');
let count = resultElement[0].innerText;

$('.minus').on('click', function () {
	count--;
	if (count < 0) {
		count = 0;
	}
	console.log(count);
	resultElement[0].innerText = count;
});

$('.plus').on('click', function () {
	count++;
	console.log(count);
	resultElement[0].innerText = count;
});
