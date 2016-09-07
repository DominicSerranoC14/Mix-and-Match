'use strict';

//Browserify required modules
const $ = require('jquery');
const makeEl = (tag) => $(document.createElement(tag));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');


//////////////////////////////////////////////////////
//Display Level title
let displayLevelTitle = (levelObj) => {

  //Create a level title
  const $h1 = makeEl('h1');
  $h1.addClass('card-level-title');
  $h1.text(levelObj.levelTitle);

  //Append the elements to the outputDiv
  $outputDiv.append($h1);

};
//////////////////////////////////////////////////////


module.exports = { displayLevelTitle };
