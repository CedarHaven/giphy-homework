// added some preliminary code stuff that's...more or less what I need to do here, just from previously-created class code.


// giphy api key: Xk2zLTsixDoPbcaT9tWf7gU1QLYcXOLK
// giphy api documents link: https://developers.giphy.com/docs/
// "Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages."
// queryURL: https://api.giphy.com/v1/gifs/search?q= + search parameter determined by text of button clicked + &limit=10&api_key=Xk2zLTsixDoPbcaT9tWf7gU1QLYcXOLK
// maybe add a rating thing in there?
// well it does say to read about the rating parameter so yeah probably add a rating parameter. &rating=g


// ...an important note: We require all apps that use GIPHY API to conspicuously display "Powered By GIPHY" attribution marks where the API is utilized (see SDK attribution guide here). You can find approved official logo marks here http://giphymedia.s3.amazonaws.com/giphy-attribution-marks.zip


// making it mobile responsive should be doable.
// I'd like to integrate it with additional APIs, but they'd have to be topic-relevant and I'm not sure how exactly to do that.



//on click of button, do thing
// $("#cat-button").on("click", function() {

//     save api url
//     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

//     ajax. url. method get.
//     $.ajax({
//     url: queryURL,
//     method: "GET"
//     })

//     once the thing above is done and ready, do a thing
//     .then(function(response) {

//         image url equals a thing found in the response object
//         var imageUrl = response.data.image_original_url;

//         declare image variable
//         var catImage = $("<img>");

//         give the image variable a source so it'll display and an alt description thingy so that if the image doesn't show up it tells you it's supposed to be a cat image
//         catImage.attr("src", imageUrl);
//         catImage.attr("alt", "cat image");

//         add new image before other images
//         $("#images").prepend(catImage);
//     });
// });





// Initial array of movies
// var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
// function displayMovieInfo() {

// var movie = $(this).attr("data-name");
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

// Creates AJAX call for the specific movie button being clicked
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {

//     Creates a div to hold the movie
//     var newDiv = $("<div/>");
//     Retrieves the Rating Data
//     var rating = response.Rated;
//     Creates an element to have the rating displayed
//     newDiv.append("Rating: "+rating+"<br>");
//     Retrieves the release year
//     var year = response.Year;
//     newDiv.append("Release Year: "+year+"<br>");
//     Retrieves the plot
//     var plot = response.Plot;
//     newDiv.append("Plot: "+plot+"<br>");
//     Creates an element to hold the image
//     var imgSrc = response.Poster;
//     var img = $("<img src="+imgSrc+">");
//     Appends the image
//     newDiv.append(img);
//     Puts the entire Movie above the previous movies.
//     $("#movies-view").prepend(newDiv);
// });

// }

// Function for displaying movie data
// function renderButtons() {

// Deletes the movies prior to adding new movies
// (this is necessary otherwise you will have repeat buttons)
// $("#buttons-view").empty();
// Loops through the array of movies
// for (var i = 0; i < movies.length; i++) {

//     Then dynamicaly generates buttons for each movie in the array
//     This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//     var a = $("<button>");
//     Adds a class of movie to our button
//     a.addClass("movie");
//     Added a data-attribute
//     a.attr("data-name", movies[i]);
//     Provided the initial button text
//     a.text(movies[i]);
//     Added the button to the buttons-view div
//     $("#buttons-view").append(a);
// }
// }

// This function handles events where the add movie button is clicked
// $("#add-movie").on("click", function(event) {
// event.preventDefault();
// This line of code will grab the input from the textbox
// var movie = $("#movie-input").val().trim();

// The movie from the textbox is then added to our array
// movies.push(movie);

// Calling renderButtons which handles the processing of our movie array
// renderButtons();
// });

// Adding click event listeners to all elements with a class of "movie"
// $(document).on("click", ".movie", displayMovieInfo);

// Calling the renderButtons function to display the intial buttons
// renderButtons();





// $(".gif").on("click", function() {
//     STEP ONE: study the html above.
//     Look at all the data attributes.
//     Run the file in the browser. Look at the images.

//     After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

//     STEP TWO: make a variable named state and then store the image's data-state into it.
//     Use the .attr() method for this.

//     ============== FILL IN CODE HERE FOR STEP TWO =========================

//     var state = $(this).attr("data-state");

//     =============================================

//     STEP THREE: Check if the variable state is equal to 'still',
//     then update the src attribute of this image to it's data-animate value,
//     and update the data-state attribute to 'animate'.

//     If state is equal to 'animate', then update the src attribute of this
//     image to it's data-still value and update the data-state attribute to 'still'
//     ============== FILL IN CODE HERE FOR STEP THREE =========================

//     if(state == "still"){
//     var animated = $(this).attr("data-animate");

//     can also do $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("src", animated);
//     $(this).attr("data-state", "animate");
//     }
//     else{
//     var still = $(this).attr("data-still");
//     $(this).attr("src", still);
//     $(this).attr("data-state", "still");
//     }

//     ==============================================

//     STEP FOUR: open the file in the browser and click on the images.
//     Then click again to pause.
// });