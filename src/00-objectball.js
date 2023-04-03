let gameHash = gameObject();
function gameObject() {//gameObject()['away']['colors'][1] this gives you purple
  return {
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          Number: 4,
          Shoe: 18,
          Points: 10,
          Rebounds: 1,
          Assists: 1,
          Steals: 2,
          Blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          Number: 0,
          Shoe: 16,
          Points: 12,
          Rebounds: 4,
          Assists: 7,
          Steals: 7,
          Blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          Number: 2,
          Shoe: 14,
          Points: 24,
          Rebounds: 12,
          Assists: 12,
          Steals: 4,
          Blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          Number: 8,
          Shoe: 15,
          Points: 33,
          Rebounds: 3,
          Assists: 2,
          Steals: 1,
          Blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          Number: 33,
          Shoe: 15,
          Points: 6,
          Rebounds: 12,
          Assists: 12,
          Steals: 22,
          Blocks: 5,
          slamDunks: 12,
        },
      },
    },
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Iverson": {
          Number: 0,
          Shoe: 16,
          Points: 22,
          Rebounds: 12,
          Assists: 12,
          Steals: 3,
          Blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          Number: 30,
          Shoe: 14,
          Points: 12,
          Rebounds: 12,
          Assists: 12,
          Steals: 12,
          Blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          Number: 11,
          Shoe: 17,
          Points: 17,
          Rebounds: 19,
          Assists: 10,
          Steals: 3,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          Number: 1,
          Shoe: 19,
          Points: 26,
          Rebounds: 12,
          Assists: 6,
          Steals: 3,
          Blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          Number: 31,
          Shoe: 15,
          Points: 19,
          Rebounds: 2,
          Assists: 2,
          Steals: 4,
          Blocks: 11,
          slamDunks: 1,
        },
      },
    },
  };
}

//even though it's not requested, it's a good idea to create a function that
//connects to all the players on each team from the start of your code. 

function numPointsScored(playerName) {

  if (Object.keys(gameObject()['home']['players']).includes(playerName)) {
    return gameObject()['home']['players'][playerName]['Points']

  }
  //do the same this for the away team here. 
  if (Object.keys(gameObject()['away']['players']).includes(playerName)) {
    return gameObject()['away']['players'][playerName]['Points']

  }
  //don't forget to return null if the playername cannot be found in either team.5lns
  return null;

}
//Test your function
console.log(numPointsScored("Jeff Adrien"))


//build a function that that gives you any players shoe size
function shoeSize(playerName) {
  if (Object.keys(gameObject()['home']['players']).includes(playerName)) {
    return gameObject()['home']['players'][playerName]['Shoe']

  }
  //do the same this for the away team here. 
  if (Object.keys(gameObject()['away']['players']).includes(playerName)) {
    return gameObject()['away']['players'][playerName]['Shoe']

  }
  //don't forget to return null if the playername cannot be found in either team.5lns
  return null;


}
//test your function 
console.log(shoeSize("Reggie Evans"))

//build a function that returns an array of that teams colors
function teamColors(teamName) {
  if (gameObject()['home']['teamName'] == teamName) {
    return gameObject()['home']['colors']

  }
  //do the same this for the away team here. 
  if (gameObject()['away']['teamName'] == teamName) {
    return gameObject()['away']['colors']

  }
  //don't forget to return null if the teamname cannot be found in either team.5lns
  return null;


}
//test your function 
console.log(teamColors("Charlotte Hornets"))

//build a function that returns an array of team names
function teamNames() {
answer = [];
  answer.push(gameObject()['home']['teamName']);
  answer.push(gameObject()['away']['teamName']);
  return answer;
 
  //don't forget to return null if the teamname cannot be found in either team.5lns
     
}
console.log(teamNames())

//test your function 


//get the player names as an array
//for each player name in that array do 
//gameobject, team, players, player name, number


// console.log(gameHash['away']['players']["Jeff Adrien"]['Number']);
// console.log(gameHash['away']['players']);
// console.log(Object.keys(gameHash['away']['players']))
function playerNumbers(teamName) {
  let playersArray = Object.keys(gameHash[teamName]['players']);
  let newPlayersArray = [];

  for (let i = 0; i < playersArray.length; i++) {
    let player = gameHash[teamName]['players'][playersArray[i]];
    newPlayersArray.push(player['Number']);
  }

  return newPlayersArray;
}

playerNumbers('home');

console.log(playerNumbers('home'))

//build a function that returns player stats

function playerStats(playerName){
  if (Object.keys(gameObject()['home']['players']).includes(playerName)){
    return gameObject()['home']['players'][playerName]
  }
  if (Object.keys(gameObject()['away']['players']).includes(playerName)){
    return gameObject()['away']['players'][playerName]
  }
  return null;
}
console.log(playerStats("Reggie Evans"))