$("#playerSearch").on("click", function () {

        var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api-nba-v1.p.rapidapi.com/players/league/standard",
                "method": "GET",
                "headers": {
                        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                        "x-rapidapi-key": "2b1f9e6733msh22bb848a9641962p19a128jsn799dd10dfb90"
                }
        }
                var searchPlayerValue = $('#searchInput').val();
                var splitPlayerValue = searchPlayerValue.split(" ");
                console.log(splitPlayerValue)
        $.ajax(settings).then(function (response) {
                console.log(response);

                var searchPlayer = response.api.players
                


                for (var i = 0; i < searchPlayer.length; i++) {
                        if (searchPlayer[i].firstName === splitPlayerValue[0] && searchPlayer[i].lastName === splitPlayerValue[1]) {
                                $(".playerStats").append(`
                                <h3>First Name: ${searchPlayer[i].firstName}</h3>
                                <h3>Last Name: ${searchPlayer[i].lastName}</h3>
                                <h3>Start Year: ${searchPlayer[i].startNba}</h3>
                                <h3>Years in NBA: ${searchPlayer[i].yearsPro}</h3>
                              </div>
                                `)
                        }

                }
        })
})


