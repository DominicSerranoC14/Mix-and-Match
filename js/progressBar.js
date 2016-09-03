'use strict';

//Browserify required modules
const $ = require('jquery');
const makeEl = (tag) => $(document.createElement(tag));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');
const { activateStartBtn } = require('./activatePage');
const { buildMessage } = require('./buildIntroMessage.js');
const $introMessage = buildMessage();
///////////////////////////////////////////////////


///////////////////////////////////////////////////
const createProgressBar = function(appendTo) {

  //Create div and assign it an id
  let el = makeEl('div');
  el.attr('id', 'progress-bar');

  //Create a loading label for the progress-bar
  let label = makeEl('div');
  label.attr('id', 'progress-label');
  label.attr('Loading... 0%');

  //Append the progress bar to the output-div
  el.append(label);
  appendTo.append(el);

};//end createProgressBar()
///////////////////////////////////////////////////


///////////////////////////////////////////////////
const startProgressBar = function(el, label) {

  let width = 10;

  //Set interval for the progress-bar
  let id = setInterval(frame, 5);

  //Function that increments the progress-bar
  function frame() {
    if (width >= 95) {
        clearInterval(id);

        //Clear outputDiv
        $outputDiv.html('');

        //Append the introMessage to the outputDiv
        $outputDiv.append($introMessage);

        //Activate event listener for start button
        activateStartBtn('start-game-btn');

    } else {
      width++;
      el.width(`${width}%`);
      label.text(`Loading... ${width + 5}%`);
    }
  }
};//End startProgressBar()
///////////////////////////////////////////////////


module.exports = { createProgressBar, startProgressBar };
