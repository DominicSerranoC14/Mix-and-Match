'use strict';

//Browserify required modules
const $ = require('jquery');
const makeEl = (tag) => $(document.createElement(tag));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');


//////////////////////////////////////////////////////
//Display Level title
let displayLevelTitle = (levelObj) => {

  const $div = makeEl('div');
  $div.addClass('level-div');

  //Create a level title
  const $h1 = makeEl('h1');
  $h1.addClass('card-level-title');
  $h1.text(levelObj.levelTitle);

  //Create three heart elements and push to an array
  let heartArray = [];
  for ( let i = 0; i < 3; i++ ) {
    let $p = makeEl('p');
    $p.addClass('heart-icon');
    heartArray.push($p);
  }

  //Append the elements to the outputDiv
  heartArray.forEach((each) => $div.append(each));
  $outputDiv.append($h1);
  $outputDiv.append($div);

};
//////////////////////////////////////////////////////


module.exports = { displayLevelTitle };
