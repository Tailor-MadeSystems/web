$( document ).ready( function () {
	$( "#tm-navbar" ).affix( {
		offset: { 
            top: 500
        }
	});

	$ ( "#tm-navbar" ).on( "affixed.bs.affix", function () {
		$( "#tm-navbar" ).css( "left", "0" );
		$( "#tm-navbar" ).css( "right", "0" );
		$( "#tm-navbar" ).css( "top", "0" );
	});
});

function homeNavBarLoad( ) {
	var classList = document.getElementById( "tm-navbar" ).getAttribute( "class" ).split( " " );

	for( i = 0; i < classList.length; i++ ) {
		if ( classList[i] == "affix" ) {
			$( "#tm-navbar" ).css( "top", "0" );
			$( "#tm-navbar" ).css( "left", "0" );
			$( "#tm-navbar" ).css( "right", "0" );
		}
	}
}