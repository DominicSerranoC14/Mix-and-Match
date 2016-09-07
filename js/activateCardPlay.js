'use strict';

//Browserify required modules
const $ = require('jquery');

//Variables
const getElByClass = (className) => $(document.getElementsByClassName(className));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');
///////////////////////////////////////////////////


/////////////////////////////////////////
//This function will activate each card that is displayed in the outputDiv
module.exports.activateCardPlay = (className) => {

  //Collect all cards currently on the outputDiv
  let liveDeck = getElByClass(className);

  console.log("Test liveDeck", liveDeck);

  //Loop through each deck and activate event listeners
  liveDeck.each( (i, each) => {

    $(each).click( (event) => {

      console.log("Test hello");

      $(event.target).addClass('flip-face-down');

    });

  });

};
/////////////////////////////////////////
