$(document).ready(function() {
	var count = 0
	$(".click").click(function() {
	count++;
	if(count == 1) {
	        $(".click").animate({"width": "12%"});
	        $(".text").animate({"font-size": "14px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".1"});
	    }else if(count == 2){
	        $(".click").animate({"width": "25%"});
	       	$(".text").animate({"font-size": "38px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".25"});	       	
	    }else if(count == 3){
	        $(".click").animate({"width": "40%"});
	       	$(".text").animate({"font-size": "85px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".45"});
	    }    
})

});
