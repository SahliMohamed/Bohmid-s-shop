$(document).ready(function(){
	//hover
	$('li').mouseenter(function(){
		$(this).css("color","#88BC4F");
		$(this).children().css("color","#88BC4F");
	});
	$('li').mouseleave(function(){
		$(this).css("color","gray");
		$(this).children().css("color","gray");
	});
	//colorer icons
	$('li').each(function(){
		if($(this).hasClass('selected')){
			$(this).children().addClass('selected');
		}
	});
	//rest selected li 
	$('li').on('click',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		$(this).siblings().children().removeClass('selected');
		$(this).children().addClass('selected');
		//filtrer
		$('.'+$(this).data('type')).siblings().css("display","none");
		$('.'+$(this).data('type')).show(100);/*css("display","block")*/;
	});
	//show all products
	$('.all').on('click',function(){
		$('.product').hide();
		$('.product').show(100);
	});
	//search in navbar
	$('.fa-search').on('click',function(){
		$('.'+ $('input').val()).siblings().hide();
		$('.'+ $('input').val()).show(100);
	});

});