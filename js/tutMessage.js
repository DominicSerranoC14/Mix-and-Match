'use strict';

//Browserify required modules
const $ = require('jquery');

//Variables
const makeEl = (tag) => $(document.createElement(tag));
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

  //Add title and p to the info div
  $el.append($title);
  $el.append($p);

  //Append div to outputDiv
  appendTo.append($el);

  return $el;

};//end buildTutMessage()

///////////////////////////////////////////////////


///////////////////////////////////////////////////
//Function that will recylce the info message
//With custom text

let tutMessage = (el, title, message) => {

  //Set the tut message title
  const $h1 = el.children('h1');
  $h1.text(title);

  //Set the tut message paragraph
  const $p = el.children('p');
  $p.text(message);

};//end tutMessageHelpIntro()

///////////////////////////////////////////////////


module.exports = { tutMessageDiv, tutMessage };
