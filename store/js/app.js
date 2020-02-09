"use strict";
// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
	root: '#app',
	routes: routes,
        theme:"md",
	view: {
		pushState: false,
                iosDynamicNavbar: true,
	}

});

var mainView = app.views.create('.view-main', {
	url: './index.php'
});

$('.hide-navbar').on('click', function () {
  app.panel.close('.panel-left');
});

//This is my report page example, I pass js script into it on load.
$(document).on('page:init', '.page[data-name="createreport"]', function (e) {
  $.getScript("init.js"); 
  $.getScript("js/functions.js");
});
//The problem I have right now is that my Ajax calls are currently not working, still trying to figure out how...
