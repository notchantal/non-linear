$(document).ready(function() {
	var count = 0
	$(".text").click(function() {
	count++;
	if(count == 1) {
	        $(this).animate({"font-size": "1.0em"});
	        $(".container-c").animate({"width": "250px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".08"});
	    } else if(count == 2){
	        $(this).animate({"font-size": "1.5em"});
	        $(".container-c").animate({"width": "300px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".1"});	       	
	    } else if(count == 3){
	        $(this).animate({"font-size": "2em"});
	        $(".container-c").animate({"width": "400px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".15"});	
	    } else if(count == 4){
	        $(this).animate({"font-size": "2.5em"});
	        $(".container-c").animate({"width": "550px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".2"});
	    } else if(count == 5){
	        $(this).animate({"font-size": "3.5em"});
	        $(".container-c").animate({"width": "650px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".3"});
	    } else if(count == 6){
	        $(this).animate({"font-size": "5em"});
	        $(".container-c").animate({"width": "800px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".4"});
	    } else if(count == 7){
	        $(this).animate({"font-size": "10em"});
	        $(".container-c").animate({"width": "100%"});
	        $(".fullscreen-bg__video").animate({"opacity": ".5"});
	    }   
})

});
