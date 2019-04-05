var apiKey = "rWAnb8AzovM4GAZ2U04UPkpGDAxHwa9G";

var records = 0;
var search="";

var requestURL;
$(document).ready( function() {
    $("#runSearch").click(GetResults);
    
});

function GetResults() {
    event.preventDefault();
   search = $("#term").val().trim();
   console.log(search);
   requestURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + " &api-key=" + apiKey;
   console.log(requestURL);

    $.ajax({
        url:requestURL,
        method:"GET"
    }).then(function(response) {
        console.log(response);
        var results = response.response.docs
        console.log(results);
        
        for (var i=0;i<results.length;i++) {

            var resultDiv = $("<div>");

            console.log(results[i].headline.main);
            var headline = $("<div>");
            headline.text(results[i].headline.main);

            var byLine = $("<div>");
            byLine.text(results[i].byline.original);

            var badge = $("<span>");
            badge.attr("class", "badge badge-light");
            badge.text(i+1);

            headline.prepend(badge);

            resultDiv.append(headline);
            resultDiv.append(byLine);
            
            


            $("#results").append(resultDiv);


        }
    });
}

Collapse



