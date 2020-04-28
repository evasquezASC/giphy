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
    let randomNumber = getRandomIntInclusive(0, 24);
        let pic_url = data.data[randomNumber].images.preview_gif.url;
     $('#result').append("<img src=" + pic_url + ">");
    });
  
  
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}