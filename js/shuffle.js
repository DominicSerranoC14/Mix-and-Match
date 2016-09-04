'use strict';

//Browserify required modules
const $ = require('jquery');
const { cardList } = require('./cardList.js');


///////////////////////////////////////////////////
//This function will sort the card deck in a random order
module.exports.shuffleSet = () => {

  cardList.forEach( (each) => {
    //Assign each card object a random 'order' value
    each.order = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  });

  //Sort each card based on its 'order' value from 1-100
  cardList.sort(function (a, b) {
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  return cardList;

};//end shuffleSet()
///////////////////////////////////////////////////


///////////////////////////////////////////////////
//Function will display a selected set of cards
module.exports.displaySet = (cardNum) => {

  //Store the shuffledSet
  const fullCardSet = module.exports.shuffleSet();

  //Determine the number of card pairs the requested level needs
  let requiredSetNum = cardNum / 2;

  //Randomly generate 1 or 2 to determine if cards will be selected
  //by odd or even position
  let selectedSet = Math.floor(Math.random() * (2) + 1);


  console.log("Test cardNum", cardNum);
  console.log("Test requiredSetNum", requiredSetNum);
  console.log("Test selectedset", selectedSet);
  console.log("Test ", fullCardSet);

};//End shuffle()
///////////////////////////////////////////////////
