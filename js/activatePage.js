'use strict';

//Browserify required modules
const $ = require('jquery');
const { tutMessageDiv, tutMessage } = require('./tutMessage');
const { tutLevelOne } = require('./tutMessageList');
const { buildMessage } = require('./buildIntroMessage.js');
const { collectCardSet, buildDeck, displayCardSet, doubleCardSet } = require('./cardDisplay');
const { cardList } = require('./cardList.js');


//Variables
const getElByClass = (className) => $(document.getElementsByClassName(className));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');
///////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
//Activate event listener for the start button
//This funciton accepts an element id as an arg
//so it can activate dynamically made elements
module.exports.activateStartButton = (el) => {

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
    module.exports.activateStartButton('start-game-btn');

  });

};
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//Activate the 'begin' button for Level 1
module.exports.activateTutBeginButton = (el) => {

  const $beginButton = getElById(el);
  $beginButton.click( () => {

    //Clear outputDiv
    $outputDiv.html('');

    //Selects a certain amount of cards from the entire card listener
    //Based on user level
    const currentCardSet = collectCardSet(tutLevelOne, cardList);
    console.log("Test currentCardSet", currentCardSet);

    const doubledSet = doubleCardSet(currentCardSet, cardList);
    console.log("Test doubledSet", doubledSet);

    //Builds the obj's into elements to be displayed
    let elementDeck = buildDeck(doubledSet);
    elementDeck += buildDeck(currentCardSet);

    //Appends the card elements to the page
    displayCardSet(tutLevelOne, elementDeck);

    //Activate event listener for start button

  });

};
/////////////////////////////////////////////////////////////
