'use strict';

//Browserify required modules
const $ = require('jquery');
const { shuffleSet, collectSetForLevel } = require('./shuffle');

//Variables
const makeEl = (tag) => $(document.createElement(tag));
const getElById = (id) => $(document.getElementById(id));
const getElByClass = (className) => $(document.getElementsByClassName(className));
const $outputDiv = getElById('output-div');
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////
//Function that stores a shuffled, specified number of cards
let collectCardSet = (levelObj, deck) => {

  //Shuffle entire cardList collection
  const shuffledDeck = shuffleSet(deck);

  //Store the required amount of card objs for user level
  return collectSetForLevel(shuffledDeck, levelObj.cardNum);

};
//////////////////////////////////////////////////////


/////////////////////////////////////////
//Function that doubles the collectedCardSet for multiple cards
let doubleCardSet = (deck, cardList) => {

  let doubledSet = [];

  //Loop through the cardList set and push any matches to an array
  //This will duplicte the cards and make matches
  deck.forEach((each) => {
    cardList.forEach((obj) => {
      if ( each.name === obj.name ) {
        doubledSet.push(obj);
      }
    });
  });

  return doubledSet;

};
/////////////////////////////////////////


//////////////////////////////////////////////////////
//Function that builds card elements outputDiv
let buildDeck = (deck) => {

  let deckArray = [];

  //Takes in the shuffled deck array and duplicates each obj
  deck.forEach( (cardObj) => {

    //Create a div with a random card background-image
    let $div = makeEl('div');
    $div.addClass('card-div-8');
    $div.css('background-image', `url(${cardObj.img})`);

    //Push to an array
    deckArray.push($div);

  });

  return deckArray;

};
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////
//Function that will display the deck of cards and level title
let displayCardSet = (cardSetArray) => {

  //Loop through the doubledCardSetArray and append each one to the outputDiv
  cardSetArray.forEach(($el) => {
    $outputDiv.append($el);
  });

};//End of displayCardSet
//////////////////////////////////////////////////////


module.exports = { collectCardSet, buildDeck, displayCardSet, doubleCardSet };
