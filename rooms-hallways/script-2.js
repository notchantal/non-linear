$(document).ready(function() {

	var myArray = [
	  "a frog jumps in–",
	  "staggers out",
	  "by myself",
	  "a worm digs silently",
	  "the lamp is low",
	  "falls on the cow-shed",
	  "the voices of wild ducks"
	];

	var count = 0
	$("p").click(function() {
	count++;

	var basho = myArray[Math.floor(Math.random()*myArray.length)];


	if(count == 1) {
	        $(".text").animate({"font-size": ".4em", "width": "150px"});
	        $(".container-c").animate({"width": "150px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".15"});
	        $("p").html(basho);
	    } else if(count == 2){
	        $(".text").animate({"font-size": ".7em", "width": "200px"});
	        $(".container-c").animate({"width": "200px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".3"});
	        $("p").html(basho);	       	
	    } else if(count == 3){
	        $(".text").animate({"font-size": ".85em", "width": "225px"});
	        $(".container-c").animate({"width": "225px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".25"});
	        $("p").html(basho);	
	    } else if(count == 4){
	        $(".text").animate({"font-size": "1.25em", "width": "300px"});
	        $(".container-c").animate({"width": "300px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".4"});
	        $("p").html(basho);
	    } else if(count == 5){
	        $(".text").animate({"font-size": "1.5em", "width": "380px"});
	        $(".container-c").animate({"width": "380px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".5"});
	        $("p").html(basho);
	    } else if(count == 6){
	        $(".text").animate({"font-size": "2em", "width": "420px"});
	        $(".container-c").animate({"width": "420px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".6"});
	        $("p").html(basho);
	    } else if(count == 7){
	        $(".text").animate({"font-size": "2em", "width": "540px"});
	        $(".container-c").animate({"width": "540px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".7"});
	        $("p").html(basho);
	    }
})

});
