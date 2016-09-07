'use strict';

//Browserify required modules
const $ = require('jquery');


/////////////////////////////////////////
//Function that accepts two card arrays, and joins each deck
let buildFinalDeck = (arrayOne, arrayTwo) => {

  //Combine the two card arrays together
  arrayTwo.forEach( (each) => {
    arrayOne.push(each);
  });

  return arrayOne;

};
/////////////////////////////////////////


/////////////////////////////////////////
//Function that shuffles the array of joined card decks
let shuffleFinalDeck = (array) => {

  for (var i = array.length - 1; i > 0; i--) {
     var j = Math.floor(Math.random() * (i + 1));
     var temp = array[i];
     array[i] = array[j];
     array[j] = temp;
 }
 return array;

};
/////////////////////////////////////////

module.exports = { buildFinalDeck, shuffleFinalDeck };
