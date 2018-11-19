jQuery(document).ready(function($){
	var e = 0;
	while(e != 1){
	
		window.addEventListener('load', function() {
    		var contents = $('.playbuzz iframe').contents();
		styleTag = $('<style>html, body, .pb-story{max-width: 100% !important;}</style>').appendTo(contents.find('head'));
		})
		if($(".new-item-stats").hasClass("embed-stat")){
		e = 1;
		}
		
	}

});
	
	 
