
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=30");
xhr.done(function(data) { console.log("success got data", data); });


$(document).ready(function () {

    var gifs = [" Naruto", "Batman", "Nintendo", "funny", "sad", "Dallas Mavericks",
        "Dallas Cowboys", "The Office", "Video games", " Puppies", "Sharks", "Donald Trump",
        "Barack Obama", "Dragon Ball Z", "Bahamas", "Jamiaca", "Hawaii", "Cheerleading", "Mad", "Excited"];

    console.log("HI");
   
    var newButton = function () {
      
       
        for (var i = 0; i < gifs.length; i++) {
         
            var newBtn = $("<button class=btn-danger>");
           
            newBtn.attr("data-type", gifs[i]);
          
            newBtn.attr("class", "gif btn-danger");
          
            newBtn.text(gifs[i]);
           
            $("#btn-Section").append(newBtn);

        }
    }
 
    var submit = function () {

        $("#submit-btn").on("click", function (event) {

            event.preventDefault();
            
            var Input = $("#userInput").val().trim();
         
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




