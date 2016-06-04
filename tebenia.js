//@nodws

$( document ).ready(function() {
	$('.tb_placeholder').on('click',function(e){
	  e.preventDefault();
	  var sib = $(this).parent(".tb_select");
	  if(sib.hasClass('open'))
	    sib.removeClass('open');
	  else
	     sib.addClass('open');
	
	//Or just remove this and go to link
	});

	$('.tb_list a').on('click',function(e){
		  $('.tb_select').removeClass('open');
		});
});