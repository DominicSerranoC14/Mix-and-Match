'use strict';

//Browserify required modules
const $ = require('jquery');


//Variables
const getElByClass = (className) => $(document.getElementsByClassName(className));
const getElById = (id) => $(document.getElementById(id));
const $outputDiv = getElById('output-div');
///////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
//Activate event listener for the start button

  //This funciton accepts an element as an arg
  //so it can activate dynamically made elements
  const activateStartBtn = (el) => {

    let $startBtn = getElById(el);
    $startBtn.click(() => {

      //Clear outputDiv
      $outputDiv.html('');

    });
  };

/////////////////////////////////////////////////////////////


module.exports = { activateStartBtn };
