$( document ).ready( function () {
	$( ".panel-body > a" ).click( function( ) {
		var input = $( this ).attr( "href" );

		$( '#myTab a[href="' + input +'"]' ).tab('show');
		$( 'a[data-toggle="tab"]' ).on( 'shown.bs.tab', function ( e ) {
  			e.target.scrollIntoView();
  		});
	});
});