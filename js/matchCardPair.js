'use strict';

//Browserify required modules
const $ = require('jquery');
let { matchArray } = require('./storage.js');
const { successfulMatch, failedMatch } = require('./matchMessage');

//Variables
const getElByClass = (className) => $(document.getElementsByClassName(className));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');
///////////////////////////////////////////////////

///////////////////////////////////////////////////
//Function that takes the matchArray and determines if there is a match
let determineMatch = (array) => {

  //If a match show success
  const test = array[0][0].id === array[1][0].id ?
    successfulMatch(array): failedMatch(array);

    //Reset matchArray after a match is made
    matchArray = [];

  //If not a match show fail and subtract life
};
///////////////////////////////////////////////////


///////////////////////////////////////////////////
//Function that accepts two divs to calculate if cards are a match or not
let determinePair = ($el) => {

  matchArray.push($el);

  //Ternary to determine if two elements have been pushed to the matchArray
  let test = matchArray.length === 2 ? determineMatch(matchArray): false;

};
///////////////////////////////////////////////////


module.exports = { determinePair, determineMatch };
