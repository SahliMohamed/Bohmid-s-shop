$(document).ready(function(){
	$('input[type="file"]').wrap('<div class=custom-file></div>'); 
	$('.custom-file').prepend('<img src="images/photo-camera.png">');
	//**hide placeholder on focus then restor on blur
	var placeAttr='';
	$('[placeholder]').focus(function(){
		placeAttr=$(this).attr('placeholder');
		$(this).attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',placeAttr);
	});
	//**show message when field is empty
	$('[required]').on('blur',function(){
		if($(this).val()==''){
			$(this).next('span').delay(1000).fadeIn().delay(2000).fadeOut();
		}
	});
	//convert input values to tags
	$('.add-tag').on('keyup',function(event){
		var keyNumber= event.keyCode || event.which;
		if (keyNumber===188) {
			var thisValue= $(this).val().slice(0,-1);
			$('.tags').append('<span class="span-tag"><i class="fas fa-times"></i>'+thisValue+'</span>');
			$(this).val('');
		}
	});
	//remove tags
	$('.tags').on('click','.span-tag i',function(){
		$(this).parent('.span-tag').fadeOut("fast")
	});
	
});