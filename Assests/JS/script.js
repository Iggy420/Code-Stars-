
    //Games Live
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

      // $(".hometeam").html("<h1>" + response.api.games[0].hTeam.shortName + "</h1>");
      // $(".awayteam").html("<h1>" + response.api.games[0].vTeam.shortName + "</h1>");
      // $(".gametime").html("<h1>" + response.api.games[0].clock + "</h1>");
      // $(".quarter").html("<h1>" + response.api.games[0].currentPeriod + "</h1>");
      // $(".homescore").html("<h1>" + response.api.games[0].hTeam.score.points + "</h1>")
      // $(".awayscore").html("<h1>" + response.api.games[0].vTeam.score.points + "</h1>")
      // $("#homelogo").attr("src", response.api.games[0].hTeam.logo)
      // $("#awaylogo").attr("src", response.api.games[0].vTeam.logo)

  var games = response.api.games;

  for (var i = 0; i < games.length; i++) {
    var gameDiv = $("<div>");
      var hteamname = games[i].hTeam.shortName
      var p = $("<p>").html(hteamname);
      gameDiv.append(p);
  }
  });
  