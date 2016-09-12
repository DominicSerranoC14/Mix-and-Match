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
let buildMatchMessage = (message, className) => {

  //Build matchMessage div
  const $div = makeEl('div');
  $div.addClass('match-message-div');
  $div.text(message);
  $div.appendTo($outputDiv);
  $div.addClass('match-div-show');
  $div.addClass(className);
};
/////////////////////////////////////////


/////////////////////////////////////////
//Function that displays successful match message and animation
const successfulMatch = (array) => {
  //Add one to matches and display message string
  matches++;
  let message = `Correct matches made: ${matches}`;
  buildMatchMessage(message, 'success');

  //Loop through each element and add success animation
  $(array).each((i, $each) => {
    //Remove flip-card animation and show match-success animation
    $each.removeClass('flip-card');
    $each.addClass('match-success');
    //$.animate has a built in timeout and cb()
    $each.animate({opacity: 1}, 2000, () => {
      $('.match-message-div').fadeOut();
      $('.match-message-div').remove();
    });
  });

};//End successfulMatch()
/////////////////////////////////////////


/////////////////////////////////////////
//Function that displays a failed match message and flips cards over
const failedMatch = (array) => {
  //Add one count to the miss variable
  ++misses;
  let message = `Oops! That's not a match.`;
  buildMatchMessage(message, 'fail');

  //Loop through each array and add flip className
  $(array).each((i, $each) => {
    //Delay one second and then show match fail message and animation
    $each.animate({opacity: 1}, 1000, () => {
      $each.removeClass('flip-card');
      $each.addClass('match-fail');
      //Fade and remove the failed match message
      $('.match-message-div').fadeOut();
      $('.match-message-div').remove();
    });
    //Animate each card after 2 secs and add flip-over animation
    $each.animate({opacity: 1}, 1000, () => {
      $each.removeClass('match-fail');
      $each.addClass('flip-over');
    });
  });

};
/////////////////////////////////////////


module.exports = { successfulMatch, failedMatch };
