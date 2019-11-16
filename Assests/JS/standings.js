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
            
                  for (var i = 0; i < teams.length; i++) {
                    $(".standings").append(`
                    <div>
                    <h3>${teams[i].conference.name}</h3>
                    <h3>${teams[i].conference.win}</h3>
                    <h3>${teams[i].conference.loss}</h3>
                    <h3>${teams[i].winPercentage}</h3
                  </div>
                    `)
                  }
            

                  });
            
});
            
        