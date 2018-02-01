$(document).ready(function() {
	var count = 0
	$(".click").click(function() {
	count++;
	if(count == 1) {
	        $(".click").animate({"width": "12%"});
	        $(".text").animate({"font-size": "14px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".1"});
	    }else if(count == 2){
	        $(".click").animate({"width": "26%"});
	       	$(".text").animate({"font-size": "28px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".25"});	       	
	    }else if(count == 3){
	        $(".click").animate({"width": "42%"});
	       	$(".text").animate({"font-size": "45px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".45"});
	    }    
})

});
