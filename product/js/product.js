$(document).ready(function(){
	var newComment = $('.comment-input');
	$('.add-comment').on('submit',function(event){
		event.preventDefault();
		if (newComment.val() != '') {
			$('<li>'+newComment.val()+'</li>').prependTo('.comment-list')
			newComment.val('');
		}
	});
});