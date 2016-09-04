'use strict';

//Browserify required modules
const $ = require('jquery');
const { tutMessageDiv, tutMessage } = require('./tutMessage');
const { tutLevelOne } = require('./tutMessageList');
const { buildMessage } = require('./buildIntroMessage.js');
const activatePage = require('./activatePage');

//Variables
const getElByClass = (className) => $(document.getElementsByClassName(className));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');
///////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
//Activate event listener for the start button
//This funciton accepts an element id as an arg
//so it can activate dynamically made elements
module.exports.activateStartBtn = (el) => {

    let $startBtn = getElById(el);
    $startBtn.click(() => {

      //Clear outputDiv
      $outputDiv.html('');

      //Display tut message div and store
      const $tutDiv = tutMessageDiv($outputDiv);

      //Insert the level one tut info in tut-div
      tutMessage($tutDiv, tutLevelOne);

    });
  };
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
//Function that activates the exit button when tut window is created
module.exports.activateTutExitButton = (el) => {

    const $exitButton = getElById(el);
    $exitButton.click( () => {

      //Clear outputDiv
      $outputDiv.html('');

      //Append the introMessage to the outputDiv
      $outputDiv.append(buildMessage());

      //Activate event listener for start button
      activatePage.activateStartBtn('start-game-btn');

    });

  };

/////////////////////////////////////////////////////////////
