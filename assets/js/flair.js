$( document ).ready( function () {
	$( ".hot-panel" ).hover(
	  function() {
	  	$( this ).addClass( "panel-tm-red" );
	  	$( this ).removeClass( "panel-default" );
	  }, function() {
	    $( this ).removeClass( "panel-tm-red" );
	    $( this ).addClass( "panel-default" );
	  }
	);
});