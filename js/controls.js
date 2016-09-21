

wApp.factory('StatsTeams', function () {
    return {"stats":{"bruno":{"bestScore":{"a":{"value":"7","subvalue":"20160916"},"b":{"value":"6","subvalue":"20160905"},"c":{"value":"6","subvalue":"20160919"}},"gameWinWithFemale":{"value":"3"},"gameWithFemale":{"value":"5"},"lastGame":{"value":"20160829"},"lastLoose":{"value":"20160829"},"lastWin":{"value":"20160905"},"nbArbitration":{"value":"3"},"nbDraw":{"value":"3"},"nbDrawWin":{"value":"1"},"nemesisIs":{"a":{"value":"vacher","subvalue":"2"},"b":{"value":"elliot","subvalue":"1"},"c":{"value":"karina","subvalue":"1"}},"nemesisOf":{"a":{"value":"karina","subvalue":"2"},"b":{"value":"vacher","subvalue":"1"},"c":{"value":"elliot","subvalue":"1"}},"totalGame":{"value":"9"},"winGame":{"value":"5"}},"christina":{"bestScore":{"a":{"value":"6","subvalue":"20160916"},"b":{"value":"3","subvalue":"20160902"},"c":{"value":"3","subvalue":"20160831"}},"gameWinWithFemale":{"value":"0"},"gameWithFemale":{"value":"2"},"lastGame":{"value":"20160831"},"lastLoose":{"value":"20160831"},"lastWin":{"value":null},"nbArbitration":{"value":"1"},"nbDraw":{"value":"1"},"nbDrawWin":{"value":"0"},"nemesisIs":{"a":{"value":"vacher","subvalue":"2"},"b":{"value":"bruno","subvalue":"1"},"c":{"value":"mikka","subvalue":"1"}},"nemesisOf":{"a":{"value":null,"subvalue":null},"b":{"value":null,"subvalue":null},"c":{"value":null,"subvalue":null}},"totalGame":{"value":"4"},"winGame":{"value":"0"}},"elliot":{"bestScore":{"a":{"value":"6","subvalue":"20160915"},"b":{"value":"4","subvalue":"20160829"},"c":{"value":"4","subvalue":"20160906"}},"gameWinWithFemale":{"value":"1"},"gameWithFemale":{"value":"2"},"lastGame":{"value":"20160829"},"lastLoose":{"value":"20160830"},"lastWin":{"value":"20160829"},"nbArbitration":{"value":"1"},"nbDraw":{"value":"3"},"nbDrawWin":{"value":"1"},"nemesisIs":{"a":{"value":"vacher","subvalue":"2"},"b":{"value":"bruno","subvalue":"1"},"c":{"value":null,"subvalue":null}},"nemesisOf":{"a":{"value":"bruno","subvalue":"1"},"b":{"value":null,"subvalue":null},"c":{"value":null,"subvalue":null}},"totalGame":{"value":"4"},"winGame":{"value":"1"}},"vacher":{"bestScore":{"a":{"value":"7","subvalue":"20160901"},"b":{"value":"6","subvalue":"20160830"},"c":{"value":"6","subvalue":"20160915"}},"gameWinWithFemale":{"value":"4"},"gameWithFemale":{"value":"6"},"lastGame":{"value":"20160830"},"lastLoose":{"value":"20160905"},"lastWin":{"value":"20160830"},"nbArbitration":{"value":"1"},"nbDraw":{"value":"2"},"nbDrawWin":{"value":"2"},"nemesisIs":{"a":{"value":"mikka","subvalue":"2"},"b":{"value":"bruno","subvalue":"1"},"c":{"value":null,"subvalue":null}},"nemesisOf":{"a":{"value":"elliot","subvalue":"2"},"b":{"value":"christina","subvalue":"2"},"c":{"value":"bruno","subvalue":"2"}},"totalGame":{"value":"9"},"winGame":{"value":"6"}},"karina":{"bestScore":{"a":{"value":"5","subvalue":"20160907"},"b":{"value":"5","subvalue":"20160919"},"c":{"value":"2","subvalue":"20160920"}},"gameWinWithFemale":{"value":"0"},"gameWithFemale":{"value":"1"},"lastGame":{"value":"20160907"},"lastLoose":{"value":"20160908"},"lastWin":{"value":"20160907"},"nbArbitration":{"value":"0"},"nbDraw":{"value":"0"},"nbDrawWin":{"value":"0"},"nemesisIs":{"a":{"value":"bruno","subvalue":"2"},"b":{"value":"mikka","subvalue":"1"},"c":{"value":null,"subvalue":null}},"nemesisOf":{"a":{"value":"bruno","subvalue":"1"},"b":{"value":null,"subvalue":null},"c":{"value":null,"subvalue":null}},"totalGame":{"value":"4"},"winGame":{"value":"1"}},"mikka":{"bestScore":{"a":{"value":"6","subvalue":"20160909"},"b":{"value":"5","subvalue":"20160908"},"c":{"value":"5","subvalue":"20160913"}},"gameWinWithFemale":{"value":"2"},"gameWithFemale":{"value":"2"},"lastGame":{"value":"20160908"},"lastLoose":{"value":null},"lastWin":{"value":"20160908"},"nbArbitration":{"value":"0"},"nbDraw":{"value":"2"},"nbDrawWin":{"value":"2"},"nemesisIs":{"a":{"value":null,"subvalue":null},"b":{"value":null,"subvalue":null},"c":{"value":null,"subvalue":null}},"nemesisOf":{"a":{"value":"vacher","subvalue":"2"},"b":{"value":"karina","subvalue":"1"},"c":{"value":"christina","subvalue":"1"}},"totalGame":{"value":"5"},"winGame":{"value":"5"}},"niklaas":{"bestScore":{"a":{"value":"4","subvalue":"20160912"},"b":{"value":null,"subvalue":null},"c":{"value":null,"subvalue":null}},"gameWinWithFemale":{"value":"0"},"gameWithFemale":{"value":"0"},"lastGame":{"value":"20160912"},"lastLoose":{"value":"20160912"},"lastWin":{"value":null},"nbArbitration":{"value":"0"},"nbDraw":{"value":"1"},"nbDrawWin":{"value":"0"},"nemesisIs":{"a":{"value":"mikka","subvalue":"1"},"b":{"value":null,"subvalue":null},"c":{"value":null,"subvalue":null}},"nemesisOf":{"a":{"value":null,"subvalue":null},"b":{"value":null,"subvalue":null},"c":{"value":null,"subvalue":null}},"totalGame":{"value":"1"},"winGame":{"value":"0"}}}};
    
});

wApp.factory('DataTeams', function () {
    return {
              "teams": [
                {
                  "id": "primary",
                  "name": "L'animateur et les co-animateurs",
                  "info": "Ceux qui jouent le plus au jeu des 30 secondes.",
                  "players": [
                    "bruno",
                    "christina",
                    "elliot",
                    "vacher"
                  ]
                },
                {
                  "id": "secondary",
                  "name": "L'équipe au sens large",
                  "info": "Ce sont aussi eux qui font le show.",
                  "players": [
                    "karina",
                    "mikka",
                    "niklaas"
                  ]
                }
              ]
            };
    
});


wApp.factory('DataAllStats', function () {
    return {"allstats":{"table":[{"id":"bruno","win":"5","defeat":"4","total":"9"},{"id":"christina","win":"0","defeat":"4","total":"4"},{"id":"elliot","win":"1","defeat":"3","total":"4"},{"id":"vacher","win":"6","defeat":"3","total":"9"},{"id":"karina","win":"1","defeat":"3","total":"4"},{"id":"mikka","win":"5","defeat":"0","total":"5"},{"id":"niklaas","win":"0","defeat":"1","total":"1"}],"totalGame":"18","totalArbitratorGame":"6",totalPoints: "160"}};
    
});


wApp.factory('DataPlayers', function () {
    return {
players: [
{
"id": "bruno",
"surname": "Bruno",
"completename": "Bruno Guillon",
"social": {
"twitter": "brunoguillonoff",
"facebook": "brunoguillonoff",
"instagram": "brunoguillonoff",
"snapchat": "brunodanslaradio"
},
"gender": "FALSE",
"team": "primary"
},
{
"id": "christina",
"surname": "Christina",
"completename": "Christina Guilloton",
"social": {
"twitter": "ChristinaNININI",
"facebook": "ChristinaNININI",
"instagram": "",
"snapchat": ""
},
"gender": "TRUE",
"team": "primary"
},
{
"id": "elliot",
"surname": "Elliot",
"completename": "Elliot Chemlekh",
"social": {
"twitter": "Elliotoff",
"facebook": "",
"instagram": "",
"snapchat": ""
},
"gender": "FALSE",
"team": "primary"
},
{
"id": "vacher",
"surname": "Vacher",
"completename": "Grégory Vacher",
"social": {
"twitter": "vacheeeer",
"facebook": "Vacheeeer",
"instagram": "vacher",
"snapchat": "vacheeeer"
},
"gender": "FALSE",
"team": "primary"
},
{
"id": "karina",
"surname": "Karina",
"completename": "Karina Siamer",
"social": {
"twitter": "karinasiamer",
"facebook": "",
"instagram": "karinasiamer",
"snapchat": "karina.siamer"
},
"gender": "TRUE",
"team": "secondary"
},
{
"id": "mikka",
"surname": "Mikka",
"completename": "Mikka Rocchia",
"social": {
"twitter": "mikkarocchia",
"facebook": "",
"instagram": "mikkarocchia",
"snapchat": "mikkarocchia"
},
"gender": "FALSE",
"team": "secondary"
},
{
"id": "niklaas",
"surname": "Niklaas du web",
"completename": "Niklaas",
"social": {
"twitter": "Niklaas_OnAir",
"facebook": "",
"instagram": "djniklaas",
"snapchat": "Niklaas-881837858498120"
},
"gender": "FALSE",
"team": "secondary"
}
]
};
    
});



wApp.controller('WListAllStatsCtrl', function ($scope, DataPlayers, DataAllStats) {
    
    $scope.allstats = DataAllStats.allstats;
    $scope.players = DataPlayers.players;
    
      $scope.sortType     = 'win'; // set the default sort type
      $scope.sortReverse  = true;  // set the default sort order
    
    $scope.findSurnameById = function(idTeam) {
        return $scope.players.filter(function(data) {
          return data.id === idTeam
        })[0].surname;
      }
    
});


wApp.controller('WListPlayersCtrl', function ($scope, DataTeams, DataPlayers) {
    
    $scope.teams = DataTeams.teams;
    $scope.players = DataPlayers.players;
    $scope.primaryTeamFilter = function( item ) {
        if( item.team == "primary" ) {
            return item;
        }
        return ;
    }
    
    $scope.findPlayerById = function(idPlayer) {
        return $scope.players.filter(function(data) {
          return data.id === idPlayer
        })[0];
      }
    
});

wApp.controller('WPlayerCtrl', function ($scope, DataTeams, DataPlayers, StatsTeams, DataAllStats) {
    
    $scope.teams = DataTeams.teams;
    $scope.players = DataPlayers.players;
    $scope.stats = StatsTeams.stats;
    $scope.allstats = DataAllStats.allstats;
    
    $scope.sPlayer = null;
    $scope.sStat = null;
    
    $scope.changePlayer = function(idPlayer) {
        
        console.log("changePlayer idPlayer = ", idPlayer);
        switchBlockT('blockPlayer', idPlayer);
        
        $scope.players.filter(function(element){
            if ( element.id === idPlayer) {
                $scope.sPlayer = element;
                return;
            }
        });
        $scope.sStat = $scope.stats[$scope.sPlayer.id];
        
        participationPB.animate($scope.sStat.totalGame.value / $scope.allstats.totalGame);
        winGamePB.animate($scope.sStat.winGame.value / $scope.sStat.totalGame.value);
        genderRepPB.animate($scope.sStat.gameWithFemale.value / $scope.sStat.totalGame.value);
        arbitrePB.animate($scope.sStat.nbArbitration.value / $scope.allstats.totalArbitratorGame);
        
    }
    
    $scope.findTeamById = function(idTeam) {
        return $scope.teams.filter(function(data) {
          return data.id === idTeam
        })[0];
      }
    
    $scope.findPlayerById = function(idTeam) {
        return $scope.players.filter(function(data) {
          return data.id === idTeam
        })[0];
      }
    
    
});
