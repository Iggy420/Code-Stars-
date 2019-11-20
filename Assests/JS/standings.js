$(document).ready(function(){

                //Games Live ajax request and response (Rapid API - NBA API Documentation)
                var settings = {
                  "async": true,
                  "crossDomain": true,
                  "url": "https://api-nba-v1.p.rapidapi.com/standings/standard/2019",
                  "method": "GET",
                  "headers": {
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "2b1f9e6733msh22bb848a9641962p19a128jsn799dd10dfb90"
                  }
                }
            
                $.ajax(settings).done(function (response) {
                  console.log(response)
            
                var teams = response.api.standings;
                var teamNames = ["Orlando Magic", "Charlotte Hornets", "Miami Heat", "Washington Bullets", "Atlanta Hawks", "Toronto Raptors", "Philadelphia 76ers", "Boston Celtics", "Brooklyn Nets", "NY Knicks", "Milwaukee Bucks", "Indiana Pacers", "Detroit Pistons", "Chicago Bulls", "Cleveland Cavaliers", "Houston Rockets", "San Antonio Spurs", "Memphis Grizzlies", "New Orleans Pelicans", "Dallas Mavericks", "Golden State Worriors", "LA Clippers", "Sacramento Kings", "LA Lakers", "Phoenix Suns", "Denver Nuggets", "Portland Trailblazers", "Utah Jazz", "OKC Thunder", "Minnesota Timberwolves"];

                console.log(teamNames)
            
                  for (var i = 0; i < teams.length; i++) {
                    $(".standings").append(`
                    <div>
                    <h3>Team Name/ID: ${teamNames[i]}<h3>
                    <h3>Conference: ${teams[i].conference.name}</h3>
                    <h3>Wins: ${teams[i].conference.win}</h3>
                    <h3>Loses: ${teams[i].conference.loss}</h3>
                    <h3>Win Percentage: ${teams[i].winPercentage}</h3>
                    <br/>
                  </div>
                    `
                    )
                  }
            

        // Team Logos

        // Team Names

        // Wins and Losses

        // Win Percentage



        var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api-nba-v1.p.rapidapi.com/standings/standard/2019",
                "method": "GET",
                "headers": {
                        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                        "x-rapidapi-key": "2b1f9e6733msh22bb848a9641962p19a128jsn799dd10dfb90"
                }
        }
        
        $.ajax(settings).done(function (response) {
                console.log(response);
        });

                  });
            
});
            
        