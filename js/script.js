// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function checkClicked () {
  // this function checks what rating of movie the user can watch alone

  // input
  const userAge = parseInt(document.getElementById("user-age").value)

  // process
  if (userAge >= 17) {
    // output
    document.getElementById("user-rating").innerHTML = "You can see an R rated movie alone."
  } else if (userAge >= 13) {
    // output
    document.getElementById("user-rating").innerHTML = "You can see a PG-13 rated movie alone."
  } else if (userAge >= 5) {
    // output
    document.getElementById("user-rating").innerHTML = "You can see a G or PG rated movie alone."
  } else {
    // output
    document.getElementById("user-rating").innerHTML = "You're too young"
  }
}
