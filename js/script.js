function slickSlider(){
	$('.slider').slick({
	  infinite: true,
	  autoplay: true,
	  arrows: true,
	  dots: true
	});
}

function magnificPopup(){
	$('.lightbox').magnificPopup({
			type: "image",
			gallery: {
					enabled: true,
					tPrev: "Vorheriges (Linke Pfeiltaste)",
					tNext: "Nächstes (Rechte Pfeiltaste)",
					tCounter: "%curr% von %total%"
			},
			tClose: "Schließen (Esc)",
			tLoading: "Lädt",
			image: {
					tError: '<a href="%url%">Das Bild</a> konnte nicht geladen werden.'
			},
			ajax: {
					tError: '<a href="%url%">Die Anfrage</a> ist fehlgeschlagen.'
			}
	});
}

function alert(){
	swal("Good job!", "You clicked the button!", "success");
}

$(document).ready(function() {
	// Slick - slide anything! - a life saver when it comes to all sorts of sliders!
	slickSlider();
	magnificPopup();
});