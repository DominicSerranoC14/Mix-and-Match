'use strict';

//Browserify required modules
const $ = require('jquery');
const { determinePair } = require('./matchCardPair');
/////////////////////////////////////////



/////////////////////////////////////////
//Function that displays successful match message and animation
const successfulMatch = (array) => {

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
