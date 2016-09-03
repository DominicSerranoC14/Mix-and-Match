'use strict';

//Browserify required modules
const $ = require('jquery');
const { buildMessage } = require('./buildIntroMessage.js');
const { activateStartBtn } = require('./activatePage');
const { createProgressBar, startProgressBar } = require('./progressBar.js');


//Variables
const getElById = (id) => $(document.getElementById(id));
const getElByClass = (className) => $(document.getElementsByClassName(className));
const $outputDiv = getElById('output-div');
const $introMessage = buildMessage();
///////////////////////////////////////////////////


//On page load build out the intro message
$(document).ready( function() {

  //Initiate Game start
  //Show and activate the progress bar
  createProgressBar($outputDiv);
  startProgressBar(getElById('progress-bar'), getElById('progress-label'));

});
