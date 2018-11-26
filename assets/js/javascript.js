var api = "http://api.giphy.com/v1/gifs/search?q=";
var searchQuery="";
var apikey = "&api_key=dc6zaTOxFJmzC"
var queryURL= queryURL + searchQuery + apikey

$.ajax({
    url:queryURL,
    method:"GET"})
    .done(function(response){
        console.log(response);
    });

function getData(giphy) {
    for (var i = 0; i < giphy.data.length; i++) {
        createImg(giphy.data[i].images.original.url);
    }
}