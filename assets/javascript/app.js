// got my topics here. they're mostly TV shows; Eevee is the odd one out, primarily because Eevee is near and dear to my heart and when I put Pokemon I thought of Eevee and then felt compelled to make an Eevee-specific button.
// I also have the searchParameter, to be filled later, and the queryURL, also to be filled later, after getting the searchParameter.
var topics = ["Steven Universe", "Adventure Time", "RWBY", "Gravity Falls", "Spongebob", "Star vs. the Forces of Evil", "Pokemon", "Infinity Train", "Eevee"];
var searchParameter;
var queryURL;
var imgAnimate;
var imgStill;

renderButtons();

function displayTopics() {
    searchParameter = $(this).attr("data-name");
    console.log(searchParameter);

    // the queryURL should return 10 gifs matching the search parameter topic with a rating no higher than PG. I thought about letting people pick their rating and I might come back and try and do that, but right now, since it wasn't required for the homework, I just set the rating to be of a child-friendly level just in case.
    queryURL = "https://api.giphy.com/v1/gifs/search?q="+searchParameter+"&limit=10&rating=g&rating=pg&api_key=Xk2zLTsixDoPbcaT9tWf7gU1QLYcXOLK";

    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {

        for(var i = 0; i < response.data.length; i++) {
            imgAnimate = response.data[i].images.original.url;
            imgStill = response.data[i].images.original_still.url;
            var rating = response.data[i].rating;
            
            var newDiv = $("<div/>");

            var img = $("<img>");
            img.attr("src", imgStill);
            img.attr("data-still", imgStill);
            img.attr("data-animate", imgAnimate);
            img.attr("data-state", "still");
            img.addClass("gif");

            newDiv.prepend(img);
            newDiv.append("<br>"+rating);

            $("#images").prepend(newDiv);
        }
    });
}

function renderButtons() {
    $("#buttons-div").empty();

    for(var i = 0; i < topics.length; i++) {
        var button = $("<button/>");
        button.addClass("topic-button");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $("#buttons-div").append(button);
    }
}

$("#add-topic").on("click", function(event) {
    event.preventDefault();
    var newTopic = $("#topic-input").val().trim();

    topics.push(newTopic);
    $("#topic-input").val("");

    renderButtons();
});

$(document).on("click", ".topic-button", displayTopics);

$(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    console.log(state);

    if(state == "still") {
        var animated = $(this).attr("data-animate");
        $(this).attr("src", animated);
        $(this).attr("data-state", "animate");
    }
    else{
        var still = $(this).attr("data-still");
        $(this).attr("src", still);
        $(this).attr("data-state", "still");
    }
});