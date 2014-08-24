$( document ).ready( function () {
	$( ".panel-body > a" ).click( function( e ) {
		e.preventDefault( );
		var id = document.getElementById( $( this ).attr( "href" ).substring( 1 ) ),
		idClasses = id.getAttribute( "class" ).split( " " ),
		linkTabs = document.getElementById( "myTab" ).children;

		for ( i = 0; i < idClasses.length; i++ ) {
			if ( idClasses[i] == "active" ) {
				break;
			} else if ( i == idClasses.length - 1 ) {
				$( '#myTab a[href="#' + id.getAttribute( "id" ) + '"]' ).tab( 'show' );
			}
		}

		for ( x = 0; x < linkTabs.length; x++ ) {
			if ( linkTabs[x].children[0].getAttribute( "href" ) == "#" + id.getAttribute( "id" ) ) {
				linkTabs[x].scrollIntoView();
				window.scrollBy( 0, -document.getElementsByClassName( "navbar" )[0].scrollHeight );
			}
		}
	});
});
