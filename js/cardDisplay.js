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
let displayCardSet = (levelObj, deckArray) => {

  //Create a level title
  const $h1 = makeEl('h1');
  $h1.addClass('card-level-title');
  $h1.text(levelObj.levelTitle);

  //Append the elements to the outputDiv
  $outputDiv.append($h1);

  console.log("Test deckArray", deckArray);

};//End of displayCardSet
//////////////////////////////////////////////////////


module.exports = { collectCardSet, buildDeck, displayCardSet };
