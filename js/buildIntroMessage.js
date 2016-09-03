'use strict';

//Browserify required modules
const $ = require('jquery');
const makeEl = (tag) => $(document.createElement(tag));


//This function builds the intro message
let buildMessage = function() {

  //Create div and add appropriate attr
  const $el = makeEl('div');
  $el.attr('id', 'intro-message');

  //Create header and add classes and text
  const $h1 = makeEl('h1');
  $h1.addClass('intro-items');
  $h1.text('Mix and Match');

  //Create button and add classes and text
  const $button = makeEl('button');
  $button.attr('id', 'start-game-btn');
  $button.addClass('start-btn', 'intro-items');
  $button.text('Start');

  //Append header and button to the div element
  $el.append($h1, $button);

  //Return the div with the intro message content
  return $el;

  };


module.exports = { buildMessage };
