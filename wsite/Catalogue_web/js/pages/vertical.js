/**
 * vertical layout mode page
 */

( function( window, $ ) {

'use strict';

var ID = window.ID;

ID.vertical = function() {

  ( function() {
    var $container = $('#vertical-feature-demo .isotope').isotope({
      itemSelector: 'li',
      layoutMode: 'vertical',
      transitionDuration: '0.6s',
      getSortData: {
        name: '.name',
        createur: '.createur',
        type: '.serif',
        date: '.date parseInt',
        category: '.category',
                category2: '.category2',

        weight: function( itemElem ) {
          var weight = $( itemElem ).find('.weight').text();
          return parseFloat( weight.replace( /[\(\)]/g, '') );
        },
       
      


      }
    });
    
    $('#vertical-feature-demo .button-group').on( 'click', 'button', function() {
      var sortByValue = $(this).attr('data-sort-by');
      $container.isotope({ sortBy: sortByValue, sortAscending: false });
    });
  })();

};

})( window, jQuery );
