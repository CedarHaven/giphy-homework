// got my topics here. they're mostly TV shows; Eevee is the odd one out, primarily because Eevee is near and dear to my heart and when I put Pokemon I thought of Eevee and then felt compelled to make an Eevee-specific button.
// I also have the searchParameter, to be filled later, and the queryURL, also to be filled later, after getting the searchParameter.
var topics = ["Steven Universe", "Adventure Time", "RWBY", "Gravity Falls", "Spongebob", "Star vs. the Forces of Evil", "Pokemon", "Infinity Train", "Eevee"];
var searchParameter;
var queryURL;
var imgAnimate;
var imgStill;

renderButtons();

function displayTopics() {
    // this gets the search parameter from the button's data-name attribute, which will be the same as the text displayed on the button
    searchParameter = $(this).attr("data-name");

    // the queryURL returns 10 gifs matching the search parameter topic with a rating no higher than PG. I thought about letting people pick their rating and I might come back and try and do that, but right now, since it wasn't required for the homework, I just set the rating to be of a child-friendly level just in case.
    queryURL = "https://api.giphy.com/v1/gifs/search?q="+searchParameter+"&limit=10&rating=g&rating=pg&api_key=Xk2zLTsixDoPbcaT9tWf7gU1QLYcXOLK";

    // ajax query to giphy's api to get some gifs
    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {

        // this gets the animated image link, the still image link, and the rating for each image
        // it does this for all ten images returned by giphy
        for(var i = 0; i < response.data.length; i++) {
            imgAnimate = response.data[i].images.original.url;
            imgStill = response.data[i].images.original_still.url;
            var rating = response.data[i].rating;
            
            // this makes a new div for each image
            var newDiv = $("<div/>");

            // this makes an new image attribute and includes attributes for the still image, anmated image, the current state of the image (it starts on still), and a gif class for the on-click event that animates an image.
            var img = $("<img>");
            img.attr("src", imgStill);
            img.attr("data-still", imgStill);
            img.attr("data-animate", imgAnimate);
            img.attr("data-state", "still");
            img.addClass("gif");

            // the image is prepended to the div and the rating of the image is appended
            newDiv.prepend(img);
            newDiv.append("<br>"+rating);

            // finally, the div containing the image and the rating of the gif is prepended to the html.
            $("#images").prepend(newDiv);
        }
    });
}

// this renders the topic buttons that will generate gifs for you
function renderButtons() {
    // it starts by emptying the div so we don't end up with repeat buttons whenever someone adds a topic
    $("#buttons-div").empty();

    // dynamically generates a button for each topic, including a data-name attribute that's the same as the text on the button
    for(var i = 0; i < topics.length; i++) {
        var button = $("<button/>");
        button.addClass("topic-button");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $("#buttons-div").append(button);
    }
}

// this is an on-click event for the add topic button. it lets the user enter a new button topic for generating gifs.
$("#add-topic").on("click", function(event) {
    event.preventDefault();
    var newTopic = $("#topic-input").val().trim();

    // since the buttons are rendered using the topics array, the user's input is pushed to the array.
    topics.push(newTopic);

    // then the topic input space is cleared.
    $("#topic-input").val("");

    // the buttons are rendered anew.
    renderButtons();
});

// this adds an on-click function to all the topic buttons
$(document).on("click", ".topic-button", displayTopics);

// this is an on-click event for all the things with the .gif class
$(document).on("click", ".gif", function() {
    // it gets the state of the image you click on
    var state = $(this).attr("data-state");

    // from there, if the image is still, the image source is changed to the moving gif and the data state is changed to animated
    // if the state is already on animated, the image source is changed back to a still gif and the data state is returned to still.
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