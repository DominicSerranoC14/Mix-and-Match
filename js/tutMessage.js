'use strict';

//Browserify required modules
const $ = require('jquery');
const activatePage = require('./activatePage');

//Variables
const makeEl = (tag) => $(document.createElement(tag));
const getElByClass = (className) => $(document.getElementsByClassName(className));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');
///////////////////////////////////////////////////


///////////////////////////////////////////////////
//Build tutorial message at the start of the Game

let tutMessageDiv = (appendTo) => {

  //Create div for info message
  const $el = makeEl('div');
  $el.attr('id', 'tut-message');

  //Create header for div
  const $title = makeEl('h1');

  //Create p for div
  const $p = makeEl('p');

  //Create action button for div
  const $button = makeEl('button');
  $button.attr('id', 'action-btn');

  //Create exit button for div
  const $exitButton = makeEl('button');
  $exitButton.attr('id', 'exit-btn');
  $exitButton.text('No thanks');


  //Add base elements to the info div
  $el.append($title);
  $el.append($p);
  $el.append($button);
  $el.append($exitButton);

  //Append div to outputDiv
  appendTo.append($el);

  return $el;

};//end buildTutMessage()

///////////////////////////////////////////////////


///////////////////////////////////////////////////
//Function that will recylce the info message
//With custom text

let tutMessage = (el, message) => {

  //Set the tut message title
  const $h1 = el.children('h1');
  $h1.text(message.title);

  //Set the tut message paragraph
  const $p = el.children('p');
  $p.text(message.paragraph);

  //Set the button for the corresponding level
  const $button = el.children('#action-btn');
  $button.text(message.btnText);

  //Set the exit button
  const $exitButton = el.children('#exit-btn');

  //Activate the exitButton
  activatePage.activateTutExitButton('exit-btn');

  //Activate the beginButton
  activatePage.activateTutBeginButton('action-btn');

};//end tutMessageHelpIntro()

///////////////////////////////////////////////////


module.exports = { tutMessageDiv, tutMessage };
