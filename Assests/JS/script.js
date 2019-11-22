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

    if ( games == 0) {
      $(".carousel").append(`
        <img src="Assests/Images/image.png" id="nbaLogo">
      `)
      console.log("hello")
    }

    else {
      for (var i = 0; i < games.length; i++) {
        $(".carousel").append(`
        <div class="carousel-item grey darken-3 white-text" href="#four!">

        <div class="row">
          <div class="col s5" id="infoOne">${games[i].hTeam.shortName}</div>
          <div class="col s2" id="infoTwo">Quarter</div>
          <div class="col s5" id="infoThree">${games[i].vTeam.shortName}</div>
        </div>

        <div class="row">
          <div class="col s5" id="infoFour"><img src="${games[i].hTeam.logo}" class= "teamLogo"></div>
          <div class="col s2" id="infoFive" id="quarter">${games[i].currentPeriod}</div>
          <div class="col s5" id="infoSix"><img src="${games[i].vTeam.logo}" class= "teamLogo"></div>
        </div>

        <div class="row">
          <div class="col s5" id="infoSeven">${games[i].hTeam.score.points}</div>
          <div class="col s2" id="infoEight">${games[i].clock}</div>
          <div class="col s5" id="infoNine">${games[i].vTeam.score.points}</div>
        </div>

        <div class="row">
        <div class="col s12" id="infoSeven">${moment().format('LLLL')}</div>
        </div>
        
      </div>
        `)
      }
    }

      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

    });

})
