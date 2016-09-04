'use strict';

//Browserify required modules
const $ = require('jquery');
const { cardList } = require('./cardList.js');


///////////////////////////////////////////////////
//Function that sorts a requested amout of cards randomly
module.exports.shuffleSet = (cardNum) => {

  //Determine the number of card pairs the requested level needs
  let requiredSetNum = cardNum / 2;

  //Randomly generate 1 or 2 to determine if cards will be selected
  //by odd or even position
  let selectedSet = Math.floor(Math.random() * (2) + 1);


  console.log("Test cardNum", cardNum);
  console.log("Test requiredSetNum", requiredSetNum);
  console.log("Test selectedset", selectedSet);

};//End shuffle()
///////////////////////////////////////////////////
