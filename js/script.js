// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {
  // input

  let iterations = parseInt(document.getElementById("iterations").value)
  let index = 0
  let approximation = 0.5

  // process

  while (index < iterations) {
    approximation = 1.0 / (2.0 + approximation)
    index += 1
  }
  approximation += 1

  // output

  document.getElementById("user-info").innerHTML = approximation
}
