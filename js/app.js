
  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


    var theme='md';
    if( isMobile.iOS()) 
      theme='ios';    

    if( isMobile.Android()) 
      theme='md';

    var $ = Dom7;
    var app = new Framework7({
        root: '#app',
        theme:theme,
        panel: {
             swipe: true,
             visibleBreakpoint: 1024,
          }
     });
     
     
     
var fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');
var searchbar = app.searchbar.create({
  el: '#searchbar-autocomplete',
  customSearch: true,
  on: {
    search: function (query) {
      console.log(query);
    }
  }
});
var autocompleteSearchbar = app.autocomplete.create({
  openIn: 'dropdown',
  inputEl: '#searchbar-autocomplete input[type="search"]',
  dropdownPlaceholderText: 'Type "Apple"',
  source: function (query, render) {
    var results = [];
    if (query.length === 0) {
      render(results);
      return;
    }
    // Find matched items
    for (var i = 0; i < fruits.length; i++) {
      if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
    }
    // Render items by passing array with result items
    render(results);
  }
})


/*$("#searchbar-autocomplete").autocomplete({
    source: fruits,
    select: function (event, ui) {
        var elem = $(event.originalEvent.toElement);
        if (elem.hasClass('ac-item-a')) {
            var url = elem.attr('data-url');
            event.preventDefault();
            window.open(url, '_blank ');
        }
    }
}).data("ui-autocomplete")._renderItem = function (ul, item) {
    return $("<li></li>")
        .data("item.autocomplete", item)
        .append('<a>' + item.label + '<span class="ac-item-a" data-url="http://www.nba.com"> View Details</span></a>')
        .appendTo(ul);
};
*/









var swiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});

var mainView = app.views.create('.view-main', {
	url: './ViewAllGrid.html'
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
