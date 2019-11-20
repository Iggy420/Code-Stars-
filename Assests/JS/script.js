$(document).ready(function(){

    //Games Live ajax request and response (Rapid API - NBA API Documentation)
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api-nba-v1.p.rapidapi.com/games/live/",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "2b1f9e6733msh22bb848a9641962p19a128jsn799dd10dfb90"
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response)

    var games = response.api.games;

      for (var i = 0; i < games.length; i++) {
        $(".carousel").append(`
        <div class="carousel-item blue white-text" href="#four!">
        <h3>${games[i].hTeam.shortName}</h3>
        <h3>${games[i].vTeam.shortName}</h3>
        <h3>${games[i].clock}</h3>
        <h3>${games[i].currentPeriod}</h3>
        <h3>${games[i].hTeam.score.points}</h3>
        <h3>${games[i].vTeam.score.points}</h3>
        <img src="${games[i].hTeam.logo}" class= "teamLogo">
        <img src="${games[i].vTeam.logo}" class= "teamLogo">
      </div>
        `)
      }

      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

    });

})