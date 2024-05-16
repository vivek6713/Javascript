'use strict';

/* 
CODDING CHALLENGE
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  // 1.desrtucture array
  const [players1, players2] = game.players;
//   console.log(players1, players2);

  // 2:here ... is rest syntax
  const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3:
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4:
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5: destuctring of object
const {odds:{
    team1,x:draw,team2
}} = game;
// console.log(team1, draw, team2);

// 6:
const printGoals = (...players) => {
    // console.log(`${players.length} goals`);
}

printGoals(...game.scored);

// for of loop => getting value from array
// for(const [ind,item] of players1Final.entries()) console.log(`${ind}:${item}`);

/* Coding Challenge
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
const scorers = {};
for(const [goal, player] of game.scored.entries()) {
    scorers[player] = goal + 1;
}
// console.log(scorers);

// SETS DATA STRUCTURE(return unique value collection)
const testData = ['john', 'wick', 'john', 'cipher'];
console.log(new Set(testData));

// MAP DATA STRUCTURE
// in object we ca use string as key
// difference between object and map is we can define any datatype key in map, ex: we can use array, object, map as key in map
const testMap = new Map();
testMap.set('name', 'calon'); // return updated map

// WORKING WITH STRING
const book = 'time travel is best';
console.log(book.slice(1, -1)); // include index 1 and exlude -1


// Codding challenge 
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      
firstName           
someVariable        
calculateAge        
delayedDeparture    

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
  
    for (const [i, row] of rows.entries()) {
      const [first, second] = row.toLowerCase().trim().split('_');
  
      const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`;
      console.log(output);
    }
  });