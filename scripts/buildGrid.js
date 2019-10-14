$.getJSON('/data/book.json', function(data) {         
    var items = [];
    var myJSON = JSON.stringify(data);
  $.each( myJSON, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});


