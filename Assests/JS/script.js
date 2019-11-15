

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

      // //.map function
      var games = response.api.games;

      for (var i = 0; i < games.length; i++) {
        $(".hometeam").append("<h1>" + "Home Team Name : " + response.api.games[i].hTeam.shortName + "</h1>");
        $(".awayteam").append("<h1>" + "Away Team Name : " + response.api.games[i].vTeam.shortName + "</h1>");
        $(".gametime").append("<h1>" + "Time : " + response.api.games[i].clock + "</h1>");
        $(".quarter").append("<h1>" + "Quarter : " + response.api.games[i].currentPeriod + "</h1>");
        $(".homescore").append("<h1>" + "Home Team Score : " + response.api.games[i].hTeam.score.points + "</h1>")
        $(".awayscore").append("<h1>" + "Away Team Score : " + response.api.games[i].vTeam.score.points + "</h1>")
        $("#homelogo").attr("src", response.api.games[i].hTeam.logo)
        $("#awaylogo").attr("src", response.api.games[i].vTeam.logo)
      }

    });


  
