(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
        document.body.scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
    }
})();


$('.img-backstreet').hover( function() {
  $('.data-backstreet').toggleClass('data-hidden');
});

$('.img-pharrell').hover( function() {
  $('.data-pharrell').toggleClass('data-hidden');
});

$('.img-usher-myway').hover( function() {
  $('.data-usher-myway').toggleClass('data-hidden');
});

$('.img-whitney-houston').hover( function() {
  $('.data-whitney-houston').toggleClass('data-hidden');
});

$('.img-willsmith').hover( function() {
  $('.data-willsmith').toggleClass('data-hidden');
});

$('.img-muse').hover( function() {
  $('.data-muse').toggleClass('data-hidden');
});

$('.img-jayz-blueprint').hover( function() {
  $('.data-willsmith').toggleClass('data-hidden');
});

$('.img-nsync').hover( function() {
  $('.data-willsmith').toggleClass('data-hidden');
});

$('.img-nodoubt').hover( function() {
  $('.data-nodoubt').toggleClass('data-hidden');
});

$('.img-aaliyah').hover( function() {
  $('.data-aaliyah').toggleClass('data-hidden');
});

$('.img-beyonce-dangerously').hover( function() {
  $('.data-beyonce-dangerously').toggleClass('data-hidden');
});

$('.img-rhcp-sa').hover( function() {
  $('.data-rhcp-sa').toggleClass('data-hidden');
});

$('.img-rhcp').hover( function() {
  $('.data-rhcp').toggleClass('data-hidden');
});

$('.img-norahjones').hover( function() {
  $('.data-norahjones').toggleClass('data-hidden');
});

$('.img-keane').hover( function() {
  $('.data-keane').toggleClass('data-hidden');
});

$('.img-arcticmonkeys').hover( function() {
  $('.data-arcticmonkeys').toggleClass('data-hidden');
});

$('.img-50cent-massacre').hover( function() {
  $('.data-50cent-massacre').toggleClass('data-hidden');
});

$('.img-lopez').hover( function() {
  $('.data-lopez').toggleClass('data-hidden');
});

$('.img-georgemichael').hover( function() {
  $('.data-georgemichael').toggleClass('data-hidden');
});

$('.img-damien').hover( function() {
  $('.data-damien').toggleClass('data-hidden');
});

$('.img-spice').hover( function() {
  $('.data-spice').toggleClass('data-hidden');
});

$('.img-mambo').hover( function() {
  $('.data-mambo').toggleClass('data-hidden');
});

$('.img-oasis').hover( function() {
  $('.data-oasis').toggleClass('data-hidden');
});

$('.img-gwenstefani').hover( function() {
  $('.data-gwenstefani').toggleClass('data-hidden');
});

$('.img-tlc').hover( function() {
  $('.data-tlc').toggleClass('data-hidden');
});

$('.img-eminem-mmlp').hover( function() {
  $('.data-eminem-mmlp').toggleClass('data-hidden');
});

$('.img-akon').hover( function() {
  $('.data-akon').toggleClass('data-hidden');
});

$('.img-survivor').hover( function() {
  $('.data-survivor').toggleClass('data-hidden');
});

$('.img-gwenstefani-love').hover( function() {
  $('.data-gwenstefani-love').toggleClass('data-hidden');
});

$('.img-2pac-alleyez').hover( function() {
  $('.data-2pac-alleyez').toggleClass('data-hidden');
});

$('.img-brighteyes').hover( function() {
  $('.data-brighteyes').toggleClass('data-hidden');
});

$('.img-slimshadylp').hover( function() {
  $('.data-slimshadylp').toggleClass('data-hidden');
});

$('.img-unwritten').hover( function() {
  $('.data-unwritten').toggleClass('data-hidden');
});

$('.img-aguilera').hover( function() {
  $('.data-aguilera').toggleClass('data-hidden');
});

$('.img-radiohead').hover( function() {
  $('.data-radiohead').toggleClass('data-hidden');
});

$('.img-akeys').hover( function() {
  $('.data-akeys').toggleClass('data-hidden');
});

$('.img-britney').hover( function() {
  $('.data-britney').toggleClass('data-hidden');
});

$('.img-dre').hover( function() {
  $('.data-dre').toggleClass('data-hidden');
});

$('.img-ironwine').hover( function() {
  $('.data-ironwine').toggleClass('data-hidden');
});

$('.img-gorillaz').hover( function() {
  $('.data-gorillaz').toggleClass('data-hidden');
});

$('.img-rage-empire').hover( function() {
  $('.data-rage-empire').toggleClass('data-hidden');
});

$('.img-thestrokes').hover( function() {
  $('.data-thestrokes').toggleClass('data-hidden');
});

$('.img-b2k').hover( function() {
  $('.data-b2k').toggleClass('data-hidden');
});

$('.img-jayz-blackalbum').hover( function() {
  $('.data-jayz-blackalbum').toggleClass('data-hidden');
});

$('.img-justified').hover( function() {
  $('.data-justified').toggleClass('data-hidden');
});

$('.img-evan').hover( function() {
  $('.data-evan').toggleClass('data-hidden');
});

$('.img-aaliyah-missu').hover( function() {
  $('.data-aaliyah-missu').toggleClass('data-hidden');
});

$('.img-50cent-getrich').hover( function() {
  $('.data-50cent-getrich').toggleClass('data-hidden');
});

$('.img-coldplay-rush').hover( function() {
  $('.data-coldplay-rush').toggleClass('data-hidden');
});

$('.img-snowpatrol').hover( function() {
  $('.data-snowpatrol').toggleClass('data-hidden');
});

$('.img-greenday-ai').hover( function() {
  $('.data-greenday-ai').toggleClass('data-hidden');
});

$('.img-deathrow').hover( function() {
  $('.data-deathrow').toggleClass('data-hidden');
});

$('.img-kanye-lr').hover( function() {
  $('.data-kanye-lr').toggleClass('data-hidden');
});

$('.img-avril').hover( function() {
  $('.data-avril').toggleClass('data-hidden');
});

$('.img-usher').hover( function() {
  $('.data-usher').toggleClass('data-hidden');
});

$('.img-flaminglips').hover( function() {
  $('.data-flaminglips').toggleClass('data-hidden');
});

$('.img-killers-hotfuss').hover( function() {
  $('.data-killers-hotfuss').toggleClass('data-hidden');
});

$('.img-jaggededge').hover( function() {
  $('.data-jaggededge').toggleClass('data-hidden');
});

$('.img-maroon5').hover( function() {
  $('.data-maroon5').toggleClass('data-hidden');
});

$('.img-jamesblunt').hover( function() {
  $('.data-jamesblunt').toggleClass('data-hidden');
});

$('.img-whitestripes').hover( function() {
  $('.data-whitestripes').toggleClass('data-hidden');
});

$('.img-outkast').hover( function() {
  $('.data-outkast').toggleClass('data-hidden');
});

$('.img-remind').hover( function() {
  $('.data-remind').toggleClass('data-hidden');
});

$('.img-nsync-nostrings').hover( function() {
  $('.data-nsync-nostrings').toggleClass('data-hidden');
});

$('.img-kanye-cd').hover( function() {
  $('.data-kanye-cd').toggleClass('data-hidden');
});

$('.img-britney-oops').hover( function() {
  $('.data-britney-oops').toggleClass('data-hidden');
});