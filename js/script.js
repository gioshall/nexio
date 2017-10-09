// fullpage
$(document).ready(function() {
	$("#fullpage").fullpage({
		anchors: ["home", "about", "service", "offering", "contact"],
		menu: ".nav",
		autoScrolling: false,
		scrollingSpeed: 500,
		resize: !0,
		touchSensitivity: 7,
		normalScrollElementTouchThreshold: 3,
		// fitToSection: false,
		onLeave: function(index, nextIndex, direction) {
			var leavingSection = $(this);
			if(index == 2 && direction =='down'){
				$('.scene').hide();

			}
			if(index == 3 && direction =='up'){
				$('.scene').show();
			}
		}
	});
});

// map
function initMap() {
	var nexio = {lat: 25.07938, lng: 121.5711507};
	var map = new google.maps.Map(document.getElementById('map'), {
		scaleControl: true,
		center: nexio,
		zoom: 15,
		zoomControl: true,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false
	});

	var marker = new google.maps.Marker({map: map, position: nexio});
	marker.addListener('click', function() {
    	infowindow.open(map, marker);
	});
}

// scroll
$(window).scroll(function(){
	var sc = $(this).scrollTop();
	var wHeight = $( window ).height();
	if ( sc >= wHeight) {
		$('.cb-01').css('bottom', -10 -0.25 * ( sc - wHeight ) );
		$('.cb-02').css('top', -10 -0.2 * ( sc - wHeight ) );
	}
	
	$('.cb-03').css('bottom',  -0.1 * ( sc - wHeight ) );

	$('.cb-a').css('top', -0.1 * ( sc / 0.5) );
	$('.cb-b').css('top', 200 - 0.1 * ( sc / 0.9 ));
	$('.cb-c').css('top', 500 - 0.1 * ( sc / 0.3 ));
	$('.cb-d').css('top', - 0.05 * ( sc / 0.9 ));
	$('.cb-e').css('top', 600 - 0.1 * ( sc / 0.9 ));

	$('.screen img:nth-of-type(1)').css('top', - 0.1 * ( sc / 0.9 ));
	$('.screen img:nth-of-type(2)').css('top', - 0.1 * ( sc / 0.8 ));
	$('.screen img:nth-of-type(4)').css('top', 80 - 0.1 * ( sc / 0.7 ));
	$('.screen img:nth-of-type(5)').css('top', - 0.1 * ( sc / 0.9 ));

})
