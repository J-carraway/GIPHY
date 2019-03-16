
//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=30");
//xhr.done(function(data) { console.log("success got data", data); });


$(document).ready(function () {

    var gifs = [" Naruto", "Batman", "Nintendo", "funny", "sad", "Dallas Mavericks",
        "Dallas Cowboys", "The Office", "Video games", " Puppies", "Sharks", "Donald Trump",
        "Barack Obama", "Dragon Ball Z", "Bahamas", "Jamiaca", "Hawaii", "Cheerleading", "Mad", "Excited"];

    console.log("HI");
    //Creates button based on elements in  the Array
    var newButton = function () {
        //removes all elements within  the topicBtnSec
        $("#btn-Section").empty();
        //Creates buttons based on elements in array
        for (var i = 0; i < gifs.length; i++) {
            //Creates new Button 
            var newBtn = $("<button class=btn-danger>");
            //give buttons a attribute
            newBtn.attr("data-type", gifs[i]);
            // add class to button
            newBtn.attr("class", "gif btn-danger");
            //Give button name that relfxt array
            newBtn.text(gifs[i]);
            //add button to DOM
            $("#btn-Section").append(newBtn);

        }
    }
    //When subtmit button is clicked
    var submit = function () {

        $("#submit-btn").on("click", function (event) {

            event.preventDefault();
            //get input text value
            var Input = $("#userInput").val().trim();
            //push user input into array
            gifs.push(Input);

            newButton();

        });
    }
    var showGifs = function () {
        var buttonValue = $(this).data("type");
            console.log(buttonValue);

    }


    newButton();
    submit();
    $(document).on("click", "gif", showGifs)
});




