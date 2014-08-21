$( document ).ready( function () {
	$( ".panel-body > a" ).click( function( e ) {
		e.preventDefault( );
		var id = document.getElementById( $( this ).attr( "href" ).substring( 1 ) ),
		idClasses = id.getAttribute( "class" ).split( " " );

		for ( i = 0; i < idClasses.length; i++ ) {
			if ( idClasses[i] == "active" ) {
				var linkTabs = document.getElementById( "myTab" ).children;
				for ( x = 0; x < linkTabs.length; x++ ) {
					if ( linkTabs[x].children[0].getAttribute( "href" ) == "#" + id.getAttribute( "id" ) ) {
						linkTabs[x].scrollIntoView();
					}
				}
				break;
			} else if ( i == idClasses.length - 1 ) {
				$( '#myTab a[href="#' + id.getAttribute( "id" ) + '"]' ).tab( 'show' );
				$( 'a[data-toggle="tab"]' ).on( 'shown.bs.tab', function ( e ) {
		  			e.target.scrollIntoView();
		  		});
			}
		}		
	});
});