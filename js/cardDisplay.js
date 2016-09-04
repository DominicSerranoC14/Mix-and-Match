'use strict';

//Browserify required modules
const $ = require('jquery');
const { shuffleSet, displaySet } = require('./shuffle');

//Variables
const makeEl = (tag) => $(document.createElement(tag));
const getElById = (id) => $(document.getElementById(id));
const getElByClass = (className) => $(document.getElementsByClassName(className));
const $outputDiv = getElById('output-div');
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////
//Function that displays a select number of cards
let displayCardSet = (levelObj) => {

  //Create a level title
  const $h1 = makeEl('h1');
  $h1.addClass('card-level-title');
  $h1.text(levelObj.levelTitle);

  //Append the elements to the outputDiv
  $outputDiv.append($h1);

  displaySet(6);

};
//////////////////////////////////////////////////////


module.exports = { displayCardSet };
