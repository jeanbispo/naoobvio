
				$(window).on('load', function() {
    		 var contents = $('.playbuzz iframe').contents();
styleTag = $('<style>html, body, .pb-story{max-width: 100% !important;}</style>').appendTo(contents.find('head'));
})
	 
