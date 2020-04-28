// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    let choice = $("#search-term").val();
    let request = "https://api.giphy.com/v1/gifs/search?q=" 
    + choice +
    "&rating=pg&api_key=dc6zaTOxFJmzC";
  fetch(request)
    .then(function(response) {
      console.log(response)  
      return response.json();
    })
    .then(function(data) {
    // debugger;   
        let pic_url = data.data[0].images.preview_gif.url;
     $('#result').append("<img src=" + pic_url + ">");
    });
  
  
});

