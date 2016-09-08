'use strict';

//Browserify required modules
const $ = require('jquery');

//Variables
const getElByClass = (className) => $(document.getElementsByClassName(className));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');
///////////////////////////////////////////////////


///////////////////////////////////////////////////
//Function that accepts two divs to calculate if cards are a match or not
///////////////////////////////////////////////////
