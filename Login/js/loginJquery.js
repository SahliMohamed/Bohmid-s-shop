$(document).ready(function(){
	$('a').on('click',function(e){
		e.preventDefault();
		$('.login-box').css("display","none").siblings().fadeIn(500);
	});
});