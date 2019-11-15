// Standings Ajax Request

        // Conferences

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

        