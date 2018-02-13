$(document).ready(function() {

	var myArray = [
	  "An old pond!",
	  "A bee",
	  "A snowy morning-",
	  "Autumn moonlight-",
	  "Waking in the night",
	  "Winter rain",
	  "The sea darkens",
	];

	var count = 0
	$("p").click(function() {
	count++;

	var basho = myArray[Math.floor(Math.random()*myArray.length)];


	if(count == 1) {
	        $(".text").animate({"font-size": "0.5em", "width": "150px"});
	        $(".container-c").animate({"width": "150px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".2"});
	        $("p").html(basho);
	    } else if(count == 2){
	        $(".text").animate({"font-size": ".9em", "width": "200px"});
	        $(".container-c").animate({"width": "200px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".4"});
	        $("p").html(basho);	       	
	    } else if(count == 3){
	        $(".text").animate({"font-size": "1em", "width": "250px"});
	        $(".container-c").animate({"width": "250px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".6"});
	        $("p").html(basho);	
	    } else if(count == 4){
	        $(".text").animate({"font-size": "1.25em", "width": "325px"});
	        $(".container-c").animate({"width": "325px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".8"});
	        $("p").html(basho);
	    } else if(count == 5){
	        $(".text").animate({"font-size": "2em", "width": "500px"});
	        $(".container-c").animate({"width": "500px"});
	        $(".fullscreen-bg__video").animate({"opacity": "1"});
	        $("p").html(basho);
	    }

})

});
