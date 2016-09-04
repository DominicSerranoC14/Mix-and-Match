'use strict';

//Browserify required modules
const $ = require('jquery');
const { cardList } = require('./cardList.js');

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
  const $h3 = makeEl('h3');
  $h3.text(levelObj.levelTitle);

  //Append the elements to the outputDiv
  $outputDiv.append($h3);

};

//////////////////////////////////////////////////////


module.exports = { displayCardSet };
