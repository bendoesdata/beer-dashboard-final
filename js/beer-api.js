var divID = '#beer-type'
var base = 'http://api.brewerydb.com/v2/'
var endpoint = 'categories?'
var api_key = 'key=abb91e648ffa2876c0a10ff6beb50455'
var url = base + endpoint + api_key ;



function processResult(data) {
  var beer = data.data[0].name;
   console.log(data);
   console.log(beer);
}

$.getJSON(url, processResult);

$("h1").append("TEST");

$( "#beer-type" ).append( document.createTextNode( "Hello" ) );

document.getElementById("test").append("hi");

id="test";
