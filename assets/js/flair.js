$( document ).ready( function () {
	$( ".hot-panel" ).hover(
	  function() {
	  	$( this ).addClass( "panel-hot-active" );
	  	$( this ).removeClass( "panel-default" );
	  }, function() {
	    $( this ).removeClass( "panel-hot-active" );
	    $( this ).addClass( "panel-default" );
	  }
	);
});