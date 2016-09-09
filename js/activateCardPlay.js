'use strict';

//Browserify required modules
const $ = require('jquery');
const { determinePair } = require('./matchCardPair');
//Variables
const getElByClass = (className) => $(document.getElementsByClassName(className));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');
///////////////////////////////////////////////////


///////////////////////////////////////////////////
//Function that activates the start of play animation
let startGameAnimation = ($el) => {
  $el.addClass('card-default-style');
  $el.addClass('flipped');
};
///////////////////////////////////////////////////


/////////////////////////////////////////
//This function will activate each card that is displayed in the outputDiv
let activateCardPlay = (className) => {

  //Collect all cards currently on the outputDiv
  let liveDeck = getElByClass(className);

  //Loop through each deck and activate event listeners
  liveDeck.each((i, each) => {

    //Add the default game style animation here to black cards out after 4 seconds
    startGameAnimation($(each));

    //Activate evnt listeners for each card
    $(each).click((event) => {
      let $div = $(event.target);
      //Adding the flipcard animation to the selected div
      $div.removeClass('card-default-style');
      $div.addClass('flip-card');

      //Matching logic function
      determinePair($div);
    });

  });

};
/////////////////////////////////////////


module.exports = { activateCardPlay };
