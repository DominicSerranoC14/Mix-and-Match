'use strict';

//Browserify required modules
const $ = require('jquery');
///////////////////////////////////////////////////


///////////////////////////////////////////////////
//This function will sort the card deck in a random order
module.exports.shuffleSet = (deck) => {

  deck.forEach( (each) => {
    //Assign each card object a random 'order' value
    each.order = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  });

  //Sort each card based on its 'order' value from 1-100
  deck.sort(function (a, b) {
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  return deck;

};//end shuffleSet()
///////////////////////////////////////////////////


///////////////////////////////////////////////////
//Function that selects a random set of cards based on user level
module.exports.collectSetForLevel = (deck, cardNum) => {

  //Determine whether to return odd or even card selectedSet
  let determineSet = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

  //Filter through the shuffled deck
  let selectedSet = deck.filter( (cardObj, i) => {

    //Return every card with an odd or even index value &&
    //Return only the 'cardNum' amount needed per level
    //ie: level 1 should return 3 cards
    //This is determined by the 'determineSet' var
    if (i % 2 === determineSet && i < cardNum * 2)  {
      return cardObj;
    }

  });

  return selectedSet;

};//end collectSetForLevel()
///////////////////////////////////////////////////
