var apiKey = "rWAnb8AzovM4GAZ2U04UPkpGDAxHwa9G";
var search ="philadelphia";


var requestURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + " &api-key=" + apiKey;
$(document).ready( function() {
    $.ajax({
        url:requestURL,
        method:"GET"
    }).then(function(response) {
        console.log(response);
    });
});



