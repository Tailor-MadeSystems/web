$( document ).ready( function ( ) {
  $( window ).on( "resize ready" , function ( ) {
    if ( $( window ).width( ) <= 768 ) {
      $( ".contact-link" ).attr( "data-toggle", "collapse" );
      $( ".contact-link" ).attr( "data-target", ".navbar-collapse" );
    } else {
      $( ".contact-link" ).removeAttr( "data-toggle" );
      $( ".contact-link" ).removeAttr( "data-target" );
    }
  });
});
