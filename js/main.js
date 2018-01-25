$(document).ready(function(){
	/* calculator*/

});

$(document).ready(function(){
	$(".question+div").hide();
	$(".question").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active").next().slideDown("500");
		}else{
			$(this).addClass("active").next().slideUp(200);
		}
	});
})
