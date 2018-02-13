$(document).ready(function() {

	var myArray = [
	  "an old pond!",
	  "a frog jumps in–",
	  "the sound of water",
	  "a bee",
	  "staggers out",
	  "of the peony",
	  "a snowy morning-",
	  "by myself",
	  "chewing on dried salmon",
	  "Autumn moonlight-",
	  "a worm digs silently",
	  "into the chestnut",
	  "waking in the night",
	  "the lamp is low",
	  "the oil freezing",
	  "winter rain",
	  "falls on the cow-shed",
	  "a cock crows",
	  "the sea darkens",
	  "the voices of wild ducks",
	  "are faintly white"
	];

	var count = 0
	$("p").click(function() {
	count++;

	var basho = myArray[Math.floor(Math.random()*myArray.length)];


	if(count == 1) {
	        $(".text").animate({"font-size": ".85em", "width": "240px"});
	        $(".container-c").animate({"width": "250px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".05"});
	        $("p").html(basho);
	    } else if(count == 2){
	        $(".text").animate({"font-size": "1.15em", "width": "290px"});
	        $(".container-c").animate({"width": "300px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".1"});
	        $("p").html(basho);	       	
	    } else if(count == 3){
	        $(".text").animate({"font-size": "1.55em", "width": "390px"});
	        $(".container-c").animate({"width": "400px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".15"});
	        $("p").html(basho);	
	    } else if(count == 4){
	        $(".text").animate({"font-size": "2.15em", "width": "540px"});
	        $(".container-c").animate({"width": "550px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".2"});
	        $("p").html(basho);
	    } else if(count == 5){
	        $(".text").animate({"font-size": "3em", "width": "640px"});
	        $(".container-c").animate({"width": "650px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".3"});
	        $("p").html(basho);
	    } else if(count == 6){
	        $(".text").animate({"font-size": "4em", "width": "790px"});
	        $(".container-c").animate({"width": "800px"});
	        $(".fullscreen-bg__video").animate({"opacity": ".5"});
	        $("p").html(basho);
	    } else if(count == 7){
	        $(".text").animate({"font-size": "5.5em", "width": "95%"});
	        $(".container-c").animate({"width": "100%"});
	        $(".fullscreen-bg__video").animate({"opacity": ".7"});
	        $("p").html(basho);
	    }  else if(count == 8){
	        location.reload();
	    }  
})

});
