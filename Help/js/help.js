$(document).ready(function(){
	$('.help div').on('click',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		$('#'+$(this).attr('data-popUp')).removeClass('hidden').siblings().addClass('hidden');;
	});

});