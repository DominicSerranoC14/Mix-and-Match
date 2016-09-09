'use strict';

//Browserify required modules
const $ = require('jquery');
const { determinePair } = require('./matchCardPair');
let { matches, misses } = require('./storage');

//Variables
const makeEl = (tag) => $(document.createElement(tag));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');
/////////////////////////////////////////


/////////////////////////////////////////
//Build message for matches/misses
// let buildMatchMessage = (message) => {
//
//   //Build matchMessage div
//   const $div = makeEl('div');
//   $div.text(message);
//   $div.addClass('match-message-div');
//   // $div.addClass('match-div-show');
//   $outputDiv.append($div);
// };
/////////////////////////////////////////


/////////////////////////////////////////
//Function that displays successful match message and animation
const successfulMatch = (array) => {
  //Add one to matches and display message string
  matches++;
  let message = `Correctly matched ${matches}!`;
  // buildMatchMessage(message);

  //Loop through each element and add success animation
  $(array).each((i, $each) => {
    //$.animate has a built in timeout and cb()
    $each.animate({opacity: 1}, 2000, () => {
      $each.removeClass('flip-card');
      $each.addClass('match-success');
    });
  });

};//End successfulMatch()
/////////////////////////////////////////

module.exports = { successfulMatch };
